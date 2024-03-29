import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { booking_roomCountOrderByAggregateInputObjectSchema } from './booking_roomCountOrderByAggregateInput.schema'
import { booking_roomMaxOrderByAggregateInputObjectSchema } from './booking_roomMaxOrderByAggregateInput.schema'
import { booking_roomMinOrderByAggregateInputObjectSchema } from './booking_roomMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomOrderByWithAggregationInput> = z
    .object({
        roomId: z.lazy(() => SortOrderSchema).optional(),
        bookingId: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => booking_roomCountOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => booking_roomMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => booking_roomMinOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const booking_roomOrderByWithAggregationInputObjectSchema = Schema
