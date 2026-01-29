import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  eventType: text("event_type").notNull(),
  eventDate: timestamp("event_date").notNull(),
  packageId: text("package_id").notNull(), // 'basic', 'advanced', 'premium'
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  eventDate: timestamp("event_date"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  eventDate: z.coerce.date(),
  email: z.string().email(),
});

export const insertInquirySchema = createInsertSchema(inquiries).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  eventDate: z.coerce.date().optional(),
  email: z.string().email(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
