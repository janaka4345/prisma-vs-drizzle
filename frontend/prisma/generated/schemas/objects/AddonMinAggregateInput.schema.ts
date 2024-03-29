import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonMinAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        addon_name: z.literal(true).optional(),
        Price: z.literal(true).optional(),
    })
    .strict()

export const AddonMinAggregateInputObjectSchema = Schema
