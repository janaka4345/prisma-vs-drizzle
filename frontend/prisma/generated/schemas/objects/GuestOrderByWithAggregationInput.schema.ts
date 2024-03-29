import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { GuestCountOrderByAggregateInputObjectSchema } from './GuestCountOrderByAggregateInput.schema'
import { GuestMaxOrderByAggregateInputObjectSchema } from './GuestMaxOrderByAggregateInput.schema'
import { GuestMinOrderByAggregateInputObjectSchema } from './GuestMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestOrderByWithAggregationInput> = z
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
        _count: z
            .lazy(() => GuestCountOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => GuestMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => GuestMinOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const GuestOrderByWithAggregationInputObjectSchema = Schema
