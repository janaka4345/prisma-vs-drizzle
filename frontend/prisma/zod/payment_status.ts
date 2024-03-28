import * as z from "zod"
import { CompleteBooking, RelatedBookingModel } from "./index"

export const Payment_statusModel = z.object({
  
  status: z.string(),
})

export interface CompletePayment_status extends z.infer<typeof Payment_statusModel> {
  Booking: CompleteBooking[]
}

/**
 * RelatedPayment_statusModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPayment_statusModel: z.ZodSchema<CompletePayment_status> = z.lazy(() => Payment_statusModel.extend({
  Booking: RelatedBookingModel.array(),
}))
