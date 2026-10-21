import { z } from 'zod';
import { insertBookingSchema, insertInquirySchema } from './schema';
export type { InsertBooking, InsertInquiry } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  bookings: {
    create: {
      method: 'POST' as const,
      path: '/api/bookings',
      input: insertBookingSchema,
      responses: {
        // Only a confirmation is returned — never echo customer details back.
        201: z.object({ success: z.boolean(), message: z.string() }),
        400: errorSchemas.validation,
      },
    },
    list: { // Public calendar availability: booked dates ONLY (no names, emails, phones or notes)
      method: 'GET' as const,
      path: '/api/bookings',
      responses: {
        200: z.array(z.object({ eventDate: z.string() })),
      },
    },
  },
  inquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/inquiries',
      input: insertInquirySchema,
      responses: {
        201: z.object({ success: z.boolean(), message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
