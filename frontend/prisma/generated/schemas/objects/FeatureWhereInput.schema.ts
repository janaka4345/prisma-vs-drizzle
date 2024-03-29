import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { Roomclass_featureListRelationFilterObjectSchema } from './Roomclass_featureListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => FeatureWhereInputObjectSchema),
                z.lazy(() => FeatureWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => FeatureWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => FeatureWhereInputObjectSchema),
                z.lazy(() => FeatureWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        feature_name: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        roomclass_feature: z
            .lazy(() => Roomclass_featureListRelationFilterObjectSchema)
            .optional(),
    })
    .strict()

export const FeatureWhereInputObjectSchema = Schema
