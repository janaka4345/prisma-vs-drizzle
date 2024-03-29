import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => FeatureScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(
                        () => FeatureScalarWhereWithAggregatesInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => FeatureScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => FeatureScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(
                        () => FeatureScalarWhereWithAggregatesInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        id: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        feature_name: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
    })
    .strict()

export const FeatureScalarWhereWithAggregatesInputObjectSchema = Schema
