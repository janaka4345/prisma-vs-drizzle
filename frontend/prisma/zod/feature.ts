import * as z from 'zod'

export const FeatureModel = z.object({
    feature_name: z.string(),
})
