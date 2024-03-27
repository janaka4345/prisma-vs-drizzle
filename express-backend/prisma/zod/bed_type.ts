import * as z from "zod"
import { Completeroom_class_bed_type, Relatedroom_class_bed_typeModel } from "./index"

export const Bed_typeModel = z.object({
  id: z.string(),
  bed_type: z.string(),
})

export interface CompleteBed_type extends z.infer<typeof Bed_typeModel> {
  room_class_bed_type: Completeroom_class_bed_type[]
}

/**
 * RelatedBed_typeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBed_typeModel: z.ZodSchema<CompleteBed_type> = z.lazy(() => Bed_typeModel.extend({
  room_class_bed_type: Relatedroom_class_bed_typeModel.array(),
}))
