import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureWhereUniqueInput> = z
    .object({
        id: z.string().optional(),
        feature_name: z.string().optional(),
    })
    .strict()

export const FeatureWhereUniqueInputObjectSchema = Schema
