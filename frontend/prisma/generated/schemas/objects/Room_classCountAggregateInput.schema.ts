import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classCountAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        class_name: z.literal(true).optional(),
        base_price: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict()

export const Room_classCountAggregateInputObjectSchema = Schema
