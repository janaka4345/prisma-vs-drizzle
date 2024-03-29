import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        class_name: z.lazy(() => SortOrderSchema).optional(),
        base_price: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const Room_classMaxOrderByAggregateInputObjectSchema = Schema
