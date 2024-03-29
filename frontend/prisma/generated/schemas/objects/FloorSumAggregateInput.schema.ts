import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorSumAggregateInputType> = z
    .object({
        floor_number: z.literal(true).optional(),
    })
    .strict()

export const FloorSumAggregateInputObjectSchema = Schema
