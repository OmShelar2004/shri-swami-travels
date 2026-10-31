import { z } from "zod";

export const bookingRequestSchema = z.object({
  departureId: z.uuid(),
  fullName: z.string().trim().min(2).max(160),
  email: z.email().trim().max(320),
  mobileNumber: z.string().trim().regex(/^[0-9+ -]{7,24}$/),
  adults: z.number().int().min(1).max(20),
  children: z.number().int().min(0).max(20).default(0),
  pickupLocation: z.string().trim().max(300).optional(),
  specialRequirements: z.string().trim().max(4000).optional(),
  idempotencyKey: z.uuid(),
});

export type BookingRequest = z.infer<typeof bookingRequestSchema>;
