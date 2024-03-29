import { z } from 'zod'
import { roomclass_featureCreateNestedManyWithoutFeatureInputObjectSchema } from './roomclass_featureCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateInput> = z
    .object({
        id: z.string().optional(),
        feature_name: z.string(),
        roomclass_feature: z
            .lazy(
                () =>
                    roomclass_featureCreateNestedManyWithoutFeatureInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const FeatureCreateInputObjectSchema = Schema
