import * as z from "zod"

export const FeatureModel = z.object({
  id: z.string(),
  feature_name: z.string(),
})
