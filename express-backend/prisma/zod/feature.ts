import * as z from "zod"
import { Completeroomclass_feature, Relatedroomclass_featureModel } from "./index"

export const FeatureModel = z.object({
  id: z.string(),
  feature_name: z.string(),
})

export interface CompleteFeature extends z.infer<typeof FeatureModel> {
  roomclass_feature: Completeroomclass_feature[]
}

/**
 * RelatedFeatureModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedFeatureModel: z.ZodSchema<CompleteFeature> = z.lazy(() => FeatureModel.extend({
  roomclass_feature: Relatedroomclass_featureModel.array(),
}))
