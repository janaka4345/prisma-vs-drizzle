import * as z from "zod"
import { CompleteFeature, RelatedFeatureModel, CompleteRoom_class, RelatedRoom_classModel } from "./index"

export const roomclass_featureModel = z.object({
  featureId: z.string(),
  room_classId: z.string(),
})

export interface Completeroomclass_feature extends z.infer<typeof roomclass_featureModel> {
  feature: CompleteFeature
  room_class: CompleteRoom_class
}

/**
 * Relatedroomclass_featureModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const Relatedroomclass_featureModel: z.ZodSchema<Completeroomclass_feature> = z.lazy(() => roomclass_featureModel.extend({
  feature: RelatedFeatureModel,
  room_class: RelatedRoom_classModel,
}))
