import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomAvgOrderByAggregateInput> = z
    .object({
        room_number: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const RoomAvgOrderByAggregateInputObjectSchema = Schema
