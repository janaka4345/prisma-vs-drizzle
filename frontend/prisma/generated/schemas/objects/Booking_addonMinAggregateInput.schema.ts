import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Booking_addonMinAggregateInputType> = z
    .object({
        addonId: z.literal(true).optional(),
        bookingId: z.literal(true).optional(),
    })
    .strict()

export const Booking_addonMinAggregateInputObjectSchema = Schema
