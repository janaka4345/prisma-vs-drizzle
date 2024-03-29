import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        bed_type: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const Bed_typeCountOrderByAggregateInputObjectSchema = Schema
