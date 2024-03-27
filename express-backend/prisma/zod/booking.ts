import * as z from "zod"
import * as imports from "../null"
import { CompleteGuest, RelatedGuestModel, CompletePayment_status, RelatedPayment_statusModel, Completebooking_addon, Relatedbooking_addonModel, Completebooking_room, Relatedbooking_roomModel } from "./index"

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

export interface CompleteBooking extends z.infer<typeof BookingModel> {
  guest: CompleteGuest
  payment_status?: CompletePayment_status | null
  booking_addon: Completebooking_addon[]
  booking_room: Completebooking_room[]
}

/**
 * RelatedBookingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBookingModel: z.ZodSchema<CompleteBooking> = z.lazy(() => BookingModel.extend({
  guest: RelatedGuestModel,
  payment_status: RelatedPayment_statusModel.nullish(),
  booking_addon: Relatedbooking_addonModel.array(),
  booking_room: Relatedbooking_roomModel.array(),
}))
