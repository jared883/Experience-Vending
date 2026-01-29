import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

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
      
      // Simulate sending email
      console.log(`[EMAIL SIMULATION] Sending booking confirmation to jared@experiencevending.com and kylee@experiencevending.com`);
      console.log(`[EMAIL SIMULATION] New Booking: ${booking.name} (${booking.email}) for ${booking.eventDate}`);
      
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
      
      // Simulate sending email inquiry
      console.log(`[EMAIL SIMULATION] New Inquiry from ${inquiry.name} (${inquiry.email}): ${inquiry.message}`);
      
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
