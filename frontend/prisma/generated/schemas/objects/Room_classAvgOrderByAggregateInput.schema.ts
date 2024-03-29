import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classAvgOrderByAggregateInput> = z
    .object({
        base_price: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const Room_classAvgOrderByAggregateInputObjectSchema = Schema
