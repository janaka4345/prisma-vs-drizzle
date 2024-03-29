import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingMinAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        checkin_date: z.literal(true).optional(),
        checkout_date: z.literal(true).optional(),
        num_adults: z.literal(true).optional(),
        num_children: z.literal(true).optional(),
        booking_amount: z.literal(true).optional(),
        guestId: z.literal(true).optional(),
        payment_statusId: z.literal(true).optional(),
    })
    .strict()

export const BookingMinAggregateInputObjectSchema = Schema
