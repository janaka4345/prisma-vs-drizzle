import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { booking_addonCountOrderByAggregateInputObjectSchema } from './booking_addonCountOrderByAggregateInput.schema'
import { booking_addonMaxOrderByAggregateInputObjectSchema } from './booking_addonMaxOrderByAggregateInput.schema'
import { booking_addonMinOrderByAggregateInputObjectSchema } from './booking_addonMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonOrderByWithAggregationInput> = z
    .object({
        addonId: z.lazy(() => SortOrderSchema).optional(),
        bookingId: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => booking_addonCountOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => booking_addonMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => booking_addonMinOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const booking_addonOrderByWithAggregationInputObjectSchema = Schema
