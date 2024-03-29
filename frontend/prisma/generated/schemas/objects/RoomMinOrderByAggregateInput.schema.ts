import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        room_number: z.lazy(() => SortOrderSchema).optional(),
        floorId: z.lazy(() => SortOrderSchema).optional(),
        room_classId: z.lazy(() => SortOrderSchema).optional(),
        statusId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const RoomMinOrderByAggregateInputObjectSchema = Schema
