import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonSumAggregateInputType> = z
    .object({
        Price: z.literal(true).optional(),
    })
    .strict()

export const AddonSumAggregateInputObjectSchema = Schema
