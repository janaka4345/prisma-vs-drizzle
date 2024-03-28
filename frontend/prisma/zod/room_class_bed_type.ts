import * as z from "zod"
import { CompleteRoom_class, RelatedRoom_classModel, CompleteBed_type, RelatedBed_typeModel } from "./index"

export const room_class_bed_typeModel = z.object({
  room_classId: z.string(),
  bed_typeId: z.string(),
  num_of_beds: z.number().int(),
})

export interface Completeroom_class_bed_type extends z.infer<typeof room_class_bed_typeModel> {
  room_class: CompleteRoom_class
  bed_type: CompleteBed_type
}

/**
 * Relatedroom_class_bed_typeModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedroom_class_bed_typeModel: z.ZodSchema<Completeroom_class_bed_type> = z.lazy(() => room_class_bed_typeModel.extend({
  room_class: RelatedRoom_classModel,
  bed_type: RelatedBed_typeModel,
}))
