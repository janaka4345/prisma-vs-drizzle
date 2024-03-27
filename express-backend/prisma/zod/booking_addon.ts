import * as z from "zod"
import * as imports from "../null"
import { CompleteAddon, RelatedAddonModel, CompleteBooking, RelatedBookingModel } from "./index"

export const booking_addonModel = z.object({
  addonId: z.string(),
  bookingId: z.string(),
})

export interface Completebooking_addon extends z.infer<typeof booking_addonModel> {
  addon: CompleteAddon
  booking: CompleteBooking
}

/**
 * Relatedbooking_addonModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedbooking_addonModel: z.ZodSchema<Completebooking_addon> = z.lazy(() => booking_addonModel.extend({
  addon: RelatedAddonModel,
  booking: RelatedBookingModel,
}))
