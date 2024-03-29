import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureMaxAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        feature_name: z.literal(true).optional(),
    })
    .strict()

export const FeatureMaxAggregateInputObjectSchema = Schema
