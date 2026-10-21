import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from "resend";
import twilio from "twilio";

const resend = new Resend(process.env.RESEND_API_KEY);

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatPhone(number: string): string {
  const cleaned = number.replace(/\s+/g, "");
  return cleaned.startsWith("+") ? cleaned : `+${cleaned}`;
}

async function sendSms(body: string) {
  try {
    const to = formatPhone(process.env.TWILIO_TO_PHONE_NUMBER!);
    const from = formatPhone(process.env.TWILIO_PHONE_NUMBER!);
    const message = await twilioClient.messages.create({ body, from, to });
    console.log(`[SMS] Sent successfully. SID: ${message.sid} | Status: ${message.status}`);
  } catch (error: any) {
    console.error("[SMS ERROR]", error?.message || error);
  }
}

async function sendBookingNotification(booking: {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: Date;
  packageId: string;
  notes?: string | null;
}) {
  const formattedDate = new Date(booking.eventDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const emailHtml = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #1a365d; border-bottom: 2px solid #1a365d; padding-bottom: 10px;">New Booking Request</h1>
      <div style="background: #fffff0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h2 style="color: #1a365d; margin-top: 0;">Client Details</h2>
        <p><strong>Name:</strong> ${escapeHtml(booking.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(booking.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(booking.phone)}</p>
      </div>
      <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h2 style="color: #1a365d; margin-top: 0;">Event Details</h2>
        <p><strong>Event Type:</strong> ${escapeHtml(booking.eventType)}</p>
        <p><strong>Event Date:</strong> ${formattedDate}</p>
        <p><strong>Package:</strong> ${escapeHtml(booking.packageId)}</p>
        ${booking.notes ? `<p><strong>Notes:</strong> ${escapeHtml(booking.notes)}</p>` : ''}
      </div>
      <p style="color: #666; font-size: 14px;">This booking was submitted through the Experience Vending website.</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'Experience Vending <onboarding@resend.dev>',
      to: ['jared@experiencevending.com'],
      subject: `New Booking: ${booking.eventType} on ${formattedDate}`,
      html: emailHtml,
    });
    console.log(`[EMAIL] Booking notification sent successfully`);
  } catch (error) {
    console.error('[EMAIL ERROR] Failed to send booking notification:', error);
  }

  await sendSms(
    `New Booking!\nName: ${booking.name}\nEvent: ${booking.eventType}\nDate: ${formattedDate}\nPackage: ${booking.packageId}\nPhone: ${booking.phone}`
  );
}

async function sendInquiryNotification(inquiry: {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
}) {
  const emailHtml = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #1a365d; border-bottom: 2px solid #1a365d; padding-bottom: 10px;">New Contact Inquiry</h1>
      <div style="background: #fffff0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h2 style="color: #1a365d; margin-top: 0;">Contact Details</h2>
        <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(inquiry.email)}</p>
        ${inquiry.phone ? `<p><strong>Phone:</strong> ${escapeHtml(inquiry.phone)}</p>` : ''}
      </div>
      <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h2 style="color: #1a365d; margin-top: 0;">Message</h2>
        <p style="white-space: pre-wrap;">${escapeHtml(inquiry.message)}</p>
      </div>
      <p style="color: #666; font-size: 14px;">This inquiry was submitted through the Experience Vending website.</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'Experience Vending <onboarding@resend.dev>',
      to: ['jared@experiencevending.com'],
      subject: `New Inquiry from ${inquiry.name}`,
      html: emailHtml,
    });
    console.log(`[EMAIL] Inquiry notification sent successfully`);
  } catch (error) {
    console.error('[EMAIL ERROR] Failed to send inquiry notification:', error);
  }

  await sendSms(
    `New Inquiry!\nName: ${inquiry.name}\nEmail: ${inquiry.email}${inquiry.phone ? `\nPhone: ${inquiry.phone}` : ''}`
  );
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // POST /api/bookings
  app.post(api.bookings.create.path, async (req, res) => {
    try {
      const input = api.bookings.create.input.parse(req.body);
      
      // Basic business logic: check if date is already booked? 
      // For MVP, we'll allow double booking or let frontend handle it, 
      // but let's just save it.
      
      await storage.createBooking(input);
      
      // Send email notification
      await sendBookingNotification(input);
      
      // Don't echo customer details back (they'd also end up in the API request log)
      res.status(201).json({ success: true, message: "Booking request received" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // GET /api/bookings (public availability calendar) — booked dates only, no PII
  app.get(api.bookings.list.path, async (_req, res) => {
    const booked = await storage.getBookedDates();
    res.json(booked.map((b) => ({ eventDate: new Date(b.eventDate).toISOString() })));
  });

  // POST /api/inquiries
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      
      // Send email notification
      await sendInquiryNotification(input);
      
      res.status(201).json({ success: true, message: "Inquiry received" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
