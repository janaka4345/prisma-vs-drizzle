import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingSumAggregateInputType> = z
    .object({
        num_adults: z.literal(true).optional(),
        num_children: z.literal(true).optional(),
        booking_amount: z.literal(true).optional(),
    })
    .strict()

export const BookingSumAggregateInputObjectSchema = Schema
