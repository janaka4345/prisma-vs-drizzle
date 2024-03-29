import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RoomCountOrderByAggregateInputObjectSchema } from './RoomCountOrderByAggregateInput.schema'
import { RoomAvgOrderByAggregateInputObjectSchema } from './RoomAvgOrderByAggregateInput.schema'
import { RoomMaxOrderByAggregateInputObjectSchema } from './RoomMaxOrderByAggregateInput.schema'
import { RoomMinOrderByAggregateInputObjectSchema } from './RoomMinOrderByAggregateInput.schema'
import { RoomSumOrderByAggregateInputObjectSchema } from './RoomSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        room_number: z.lazy(() => SortOrderSchema).optional(),
        floorId: z.lazy(() => SortOrderSchema).optional(),
        room_classId: z.lazy(() => SortOrderSchema).optional(),
        statusId: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => RoomCountOrderByAggregateInputObjectSchema)
            .optional(),
        _avg: z.lazy(() => RoomAvgOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => RoomMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => RoomMinOrderByAggregateInputObjectSchema).optional(),
        _sum: z.lazy(() => RoomSumOrderByAggregateInputObjectSchema).optional(),
    })
    .strict()

export const RoomOrderByWithAggregationInputObjectSchema = Schema
