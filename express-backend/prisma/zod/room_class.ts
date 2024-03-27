import * as z from "zod"
import * as imports from "../null"
import { CompleteRoom, RelatedRoomModel, Completeroom_class_bed_type, Relatedroom_class_bed_typeModel, Completeroomclass_feature, Relatedroomclass_featureModel } from "./index"

export const Room_classModel = z.object({
  id: z.string(),
  class_name: z.string(),
  base_price: z.number(),
})

export interface CompleteRoom_class extends z.infer<typeof Room_classModel> {
  Room: CompleteRoom[]
  room_class_bed_type: Completeroom_class_bed_type[]
  roomclass_feature: Completeroomclass_feature[]
}

/**
 * RelatedRoom_classModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRoom_classModel: z.ZodSchema<CompleteRoom_class> = z.lazy(() => Room_classModel.extend({
  Room: RelatedRoomModel.array(),
  room_class_bed_type: Relatedroom_class_bed_typeModel.array(),
  roomclass_feature: Relatedroomclass_featureModel.array(),
}))
