import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { BookingOrderByRelationAggregateInputObjectSchema } from './BookingOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        first_name: z.lazy(() => SortOrderSchema).optional(),
        last_name: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        phone_no: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputObjectSchema),
            ])
            .optional(),
        Booking: z
            .lazy(() => BookingOrderByRelationAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const GuestOrderByWithRelationInputObjectSchema = Schema
