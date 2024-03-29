import { z } from 'zod'
import { roomclass_featureUncheckedCreateNestedManyWithoutFeatureInputObjectSchema } from './roomclass_featureUncheckedCreateNestedManyWithoutFeatureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureUncheckedCreateInput> = z
    .object({
        id: z.string().optional(),
        feature_name: z.string(),
        roomclass_feature: z
            .lazy(
                () =>
                    roomclass_featureUncheckedCreateNestedManyWithoutFeatureInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const FeatureUncheckedCreateInputObjectSchema = Schema
