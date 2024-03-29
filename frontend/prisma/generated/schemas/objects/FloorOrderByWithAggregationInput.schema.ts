import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FloorCountOrderByAggregateInputObjectSchema } from './FloorCountOrderByAggregateInput.schema'
import { FloorAvgOrderByAggregateInputObjectSchema } from './FloorAvgOrderByAggregateInput.schema'
import { FloorMaxOrderByAggregateInputObjectSchema } from './FloorMaxOrderByAggregateInput.schema'
import { FloorMinOrderByAggregateInputObjectSchema } from './FloorMinOrderByAggregateInput.schema'
import { FloorSumOrderByAggregateInputObjectSchema } from './FloorSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        floor_number: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => FloorCountOrderByAggregateInputObjectSchema)
            .optional(),
        _avg: z
            .lazy(() => FloorAvgOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => FloorMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => FloorMinOrderByAggregateInputObjectSchema)
            .optional(),
        _sum: z
            .lazy(() => FloorSumOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const FloorOrderByWithAggregationInputObjectSchema = Schema
