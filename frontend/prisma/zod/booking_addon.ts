import * as z from "zod"

export const booking_addonModel = z.object({
  addonId: z.string(),
  bookingId: z.string(),
})
