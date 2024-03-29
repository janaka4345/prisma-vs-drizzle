import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        checkin_date: z.lazy(() => SortOrderSchema).optional(),
        checkout_date: z.lazy(() => SortOrderSchema).optional(),
        num_adults: z.lazy(() => SortOrderSchema).optional(),
        num_children: z.lazy(() => SortOrderSchema).optional(),
        booking_amount: z.lazy(() => SortOrderSchema).optional(),
        guestId: z.lazy(() => SortOrderSchema).optional(),
        payment_statusId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const BookingMaxOrderByAggregateInputObjectSchema = Schema
