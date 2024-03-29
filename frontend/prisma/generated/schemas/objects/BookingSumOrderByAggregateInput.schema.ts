import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingSumOrderByAggregateInput> = z
    .object({
        num_adults: z.lazy(() => SortOrderSchema).optional(),
        num_children: z.lazy(() => SortOrderSchema).optional(),
        booking_amount: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const BookingSumOrderByAggregateInputObjectSchema = Schema
