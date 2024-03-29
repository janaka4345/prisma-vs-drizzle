import * as z from "zod"

export const BookingModel = z.object({
  id: z.string(),
  checkin_date: z.date(),
  checkout_date: z.date(),
  num_adults: z.number().int(),
  num_children: z.number().int(),
  booking_amount: z.number(),
  guestId: z.string(),
  payment_statusId: z.string().nullish(),
})
