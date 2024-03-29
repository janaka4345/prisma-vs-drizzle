import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorMinAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        floor_number: z.literal(true).optional(),
    })
    .strict()

export const FloorMinAggregateInputObjectSchema = Schema
