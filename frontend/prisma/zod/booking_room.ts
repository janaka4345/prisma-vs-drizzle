import * as z from "zod"
import { CompleteRoom, RelatedRoomModel, CompleteBooking, RelatedBookingModel } from "./index"

export const booking_roomModel = z.object({
  roomId: z.string(),
  bookingId: z.string(),
})

export interface Completebooking_room extends z.infer<typeof booking_roomModel> {
  room: CompleteRoom
  booking: CompleteBooking
}

/**
 * Relatedbooking_roomModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedbooking_roomModel: z.ZodSchema<Completebooking_room> = z.lazy(() => booking_roomModel.extend({
  room: RelatedRoomModel,
  booking: RelatedBookingModel,
}))
