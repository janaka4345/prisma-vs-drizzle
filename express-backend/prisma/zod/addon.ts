import * as z from "zod"
import * as imports from "../null"
import { Completebooking_addon, Relatedbooking_addonModel } from "./index"

export const AddonModel = z.object({
  id: z.string(),
  addon_name: z.string(),
  Price: z.number(),
})

export interface CompleteAddon extends z.infer<typeof AddonModel> {
  booking_addon: Completebooking_addon[]
}

/**
 * RelatedAddonModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAddonModel: z.ZodSchema<CompleteAddon> = z.lazy(() => AddonModel.extend({
  booking_addon: Relatedbooking_addonModel.array(),
}))
