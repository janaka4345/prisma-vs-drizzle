import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Booking_roomCountAggregateInputType> = z
    .object({
        roomId: z.literal(true).optional(),
        bookingId: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict()

export const Booking_roomCountAggregateInputObjectSchema = Schema
