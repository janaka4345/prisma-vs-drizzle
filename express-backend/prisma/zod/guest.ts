import * as z from "zod"
import { CompleteBooking, RelatedBookingModel } from "./index"

export const GuestModel = z.object({
  id: z.string(),
  first_name: z.string().max(255, { message: "The First Name must be shorter than 256 characters" }).min(1, { message: "First Name is Required" }),
  last_name: z.string().max(255, { message: "The Last Name must be shorter than 256 characters" }).min(1, { message: "Last Name is Required" }),
  email: z.string().email().min(1, { message: "Email is Required" }),
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
