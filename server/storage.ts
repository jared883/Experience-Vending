import { bookings, inquiries, type Booking, type InsertBooking, type Inquiry, type InsertInquiry } from "@shared/schema";
import { db } from "./db";
import { gte } from "drizzle-orm";

export interface IStorage {
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  /** Public-safe: only the dates of upcoming bookings, for the availability calendar. */
  getBookedDates(): Promise<{ eventDate: Date }[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class DatabaseStorage implements IStorage {
  async createBooking(booking: InsertBooking): Promise<Booking> {
    const [newBooking] = await db
      .insert(bookings)
      .values(booking)
      .returning();
    return newBooking;
  }

  async getBookings(): Promise<Booking[]> {
    return await db.select().from(bookings);
  }

  async getBookedDates(): Promise<{ eventDate: Date }[]> {
    const since = new Date();
    since.setDate(since.getDate() - 1);
    return await db
      .select({ eventDate: bookings.eventDate })
      .from(bookings)
      .where(gte(bookings.eventDate, since));
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db
      .insert(inquiries)
      .values(inquiry)
      .returning();
    return newInquiry;
  }
}

export const storage = new DatabaseStorage();
