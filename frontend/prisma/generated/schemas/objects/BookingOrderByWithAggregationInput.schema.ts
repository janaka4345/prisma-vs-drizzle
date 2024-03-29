import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { BookingCountOrderByAggregateInputObjectSchema } from './BookingCountOrderByAggregateInput.schema'
import { BookingAvgOrderByAggregateInputObjectSchema } from './BookingAvgOrderByAggregateInput.schema'
import { BookingMaxOrderByAggregateInputObjectSchema } from './BookingMaxOrderByAggregateInput.schema'
import { BookingMinOrderByAggregateInputObjectSchema } from './BookingMinOrderByAggregateInput.schema'
import { BookingSumOrderByAggregateInputObjectSchema } from './BookingSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        checkin_date: z.lazy(() => SortOrderSchema).optional(),
        checkout_date: z.lazy(() => SortOrderSchema).optional(),
        num_adults: z.lazy(() => SortOrderSchema).optional(),
        num_children: z.lazy(() => SortOrderSchema).optional(),
        booking_amount: z.lazy(() => SortOrderSchema).optional(),
        guestId: z.lazy(() => SortOrderSchema).optional(),
        payment_statusId: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputObjectSchema),
            ])
            .optional(),
        _count: z
            .lazy(() => BookingCountOrderByAggregateInputObjectSchema)
            .optional(),
        _avg: z
            .lazy(() => BookingAvgOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => BookingMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => BookingMinOrderByAggregateInputObjectSchema)
            .optional(),
        _sum: z
            .lazy(() => BookingSumOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const BookingOrderByWithAggregationInputObjectSchema = Schema
