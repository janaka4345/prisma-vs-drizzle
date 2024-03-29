import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateManyGuestInput> = z
    .object({
        id: z.string().optional(),
        checkin_date: z.coerce.date(),
        checkout_date: z.coerce.date(),
        num_adults: z.number(),
        num_children: z.number(),
        booking_amount: z.number(),
        payment_statusId: z.string().optional().nullable(),
    })
    .strict()

export const BookingCreateManyGuestInputObjectSchema = Schema
