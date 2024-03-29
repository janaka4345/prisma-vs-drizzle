import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const Payment_statusCountOrderByAggregateInputObjectSchema = Schema
