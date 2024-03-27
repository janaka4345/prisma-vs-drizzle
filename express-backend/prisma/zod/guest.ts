import * as z from "zod"
import * as imports from "../null"
import { CompleteBooking, RelatedBookingModel } from "./index"

export const GuestModel = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone_no: z.string().nullish(),
})

export interface CompleteGuest extends z.infer<typeof GuestModel> {
  Booking: CompleteBooking[]
}

/**
 * RelatedGuestModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedGuestModel: z.ZodSchema<CompleteGuest> = z.lazy(() => GuestModel.extend({
  Booking: RelatedBookingModel.array(),
}))
