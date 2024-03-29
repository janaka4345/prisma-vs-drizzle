import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { Room_classCountOrderByAggregateInputObjectSchema } from './Room_classCountOrderByAggregateInput.schema'
import { Room_classAvgOrderByAggregateInputObjectSchema } from './Room_classAvgOrderByAggregateInput.schema'
import { Room_classMaxOrderByAggregateInputObjectSchema } from './Room_classMaxOrderByAggregateInput.schema'
import { Room_classMinOrderByAggregateInputObjectSchema } from './Room_classMinOrderByAggregateInput.schema'
import { Room_classSumOrderByAggregateInputObjectSchema } from './Room_classSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        class_name: z.lazy(() => SortOrderSchema).optional(),
        base_price: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => Room_classCountOrderByAggregateInputObjectSchema)
            .optional(),
        _avg: z
            .lazy(() => Room_classAvgOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => Room_classMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => Room_classMinOrderByAggregateInputObjectSchema)
            .optional(),
        _sum: z
            .lazy(() => Room_classSumOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const Room_classOrderByWithAggregationInputObjectSchema = Schema
