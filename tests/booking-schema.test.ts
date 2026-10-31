import { describe, expect, it } from "vitest";
import { bookingRequestSchema } from "@/features/bookings/booking-schema";

const validRequest = {
  departureId: "9da48dde-6ae5-4b1d-9e18-84ab561a1d07",
  fullName: "Asha Patil",
  email: "asha@example.com",
  mobileNumber: "+91 9323923183",
  adults: 2,
  idempotencyKey: "8abf730c-aa5f-4ca2-8f5b-0870c7cf0e61",
};

describe("bookingRequestSchema", () => {
  it("accepts a valid booking request and defaults children to zero", () => {
    expect(bookingRequestSchema.parse(validRequest).children).toBe(0);
  });

  it("rejects a request with no adult travellers", () => {
    expect(() => bookingRequestSchema.parse({ ...validRequest, adults: 0 })).toThrow();
  });
});
