import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { Room_statusCountOrderByAggregateInputObjectSchema } from './Room_statusCountOrderByAggregateInput.schema'
import { Room_statusMaxOrderByAggregateInputObjectSchema } from './Room_statusMaxOrderByAggregateInput.schema'
import { Room_statusMinOrderByAggregateInputObjectSchema } from './Room_statusMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => Room_statusCountOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => Room_statusMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => Room_statusMinOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const Room_statusOrderByWithAggregationInputObjectSchema = Schema
