import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const Room_statusMinOrderByAggregateInputObjectSchema = Schema
