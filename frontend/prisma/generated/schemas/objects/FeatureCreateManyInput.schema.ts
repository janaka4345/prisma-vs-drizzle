import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateManyInput> = z
    .object({
        id: z.string().optional(),
        feature_name: z.string(),
    })
    .strict()

export const FeatureCreateManyInputObjectSchema = Schema
