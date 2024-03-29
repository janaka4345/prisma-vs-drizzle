import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { Payment_statusCountOrderByAggregateInputObjectSchema } from './Payment_statusCountOrderByAggregateInput.schema'
import { Payment_statusMaxOrderByAggregateInputObjectSchema } from './Payment_statusMaxOrderByAggregateInput.schema'
import { Payment_statusMinOrderByAggregateInputObjectSchema } from './Payment_statusMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => Payment_statusCountOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => Payment_statusMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => Payment_statusMinOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const Payment_statusOrderByWithAggregationInputObjectSchema = Schema
