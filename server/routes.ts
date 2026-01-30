import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
      </div>
      <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h2 style="color: #1a365d; margin-top: 0;">Event Details</h2>
        <p><strong>Event Type:</strong> ${booking.eventType}</p>
        <p><strong>Event Date:</strong> ${formattedDate}</p>
        <p><strong>Package:</strong> ${booking.packageId}</p>
        ${booking.notes ? `<p><strong>Notes:</strong> ${booking.notes}</p>` : ''}
      </div>
      <p style="color: #666; font-size: 14px;">This booking was submitted through the Experience Vending website.</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'Experience Vending <onboarding@resend.dev>',
      to: ['jared@experiencevending.com', 'kylee@experiencevending.com'],
      subject: `New Booking: ${booking.eventType} on ${formattedDate}`,
      html: emailHtml,
    });
    console.log(`[EMAIL] Booking notification sent successfully`);
  } catch (error) {
    console.error('[EMAIL ERROR] Failed to send booking notification:', error);
  }
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
        <p><strong>Name:</strong> ${inquiry.name}</p>
        <p><strong>Email:</strong> ${inquiry.email}</p>
        ${inquiry.phone ? `<p><strong>Phone:</strong> ${inquiry.phone}</p>` : ''}
      </div>
      <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h2 style="color: #1a365d; margin-top: 0;">Message</h2>
        <p style="white-space: pre-wrap;">${inquiry.message}</p>
      </div>
      <p style="color: #666; font-size: 14px;">This inquiry was submitted through the Experience Vending website.</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'Experience Vending <onboarding@resend.dev>',
      to: ['jared@experiencevending.com', 'kylee@experiencevending.com'],
      subject: `New Inquiry from ${inquiry.name}`,
      html: emailHtml,
    });
    console.log(`[EMAIL] Inquiry notification sent successfully`);
  } catch (error) {
    console.error('[EMAIL ERROR] Failed to send inquiry notification:', error);
  }
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
      
      const booking = await storage.createBooking(input);
      
      // Send email notification
      await sendBookingNotification(input);
      
      res.status(201).json(booking);
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

  // GET /api/bookings (for calendar)
  app.get(api.bookings.list.path, async (req, res) => {
    const bookings = await storage.getBookings();
    res.json(bookings);
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

  // Seed Data (if empty)
  const existingBookings = await storage.getBookings();
  if (existingBookings.length === 0) {
    console.log("Seeding database with initial bookings...");
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    await storage.createBooking({
      name: "Alice Smith",
      email: "alice@example.com",
      phone: "555-0101",
      eventType: "Wedding",
      eventDate: tomorrow,
      packageId: "premium",
      notes: "Outdoor venue",
    });

    await storage.createBooking({
      name: "Bob Jones",
      email: "bob@example.com",
      phone: "555-0102",
      eventType: "Corporate",
      eventDate: nextWeek,
      packageId: "advanced",
      notes: "Company anniversary",
    });
  }

  return httpServer;
}
