import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomCountOrderByAggregateInput> = z
    .object({
        roomId: z.lazy(() => SortOrderSchema).optional(),
        bookingId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const booking_roomCountOrderByAggregateInputObjectSchema = Schema
