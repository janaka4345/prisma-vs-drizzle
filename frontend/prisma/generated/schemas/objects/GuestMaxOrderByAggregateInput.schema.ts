import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestMaxOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        first_name: z.lazy(() => SortOrderSchema).optional(),
        last_name: z.lazy(() => SortOrderSchema).optional(),
        email: z.lazy(() => SortOrderSchema).optional(),
        phone_no: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const GuestMaxOrderByAggregateInputObjectSchema = Schema
