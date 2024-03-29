import * as z from "zod"

export const booking_roomModel = z.object({
  roomId: z.string(),
  bookingId: z.string(),
})
