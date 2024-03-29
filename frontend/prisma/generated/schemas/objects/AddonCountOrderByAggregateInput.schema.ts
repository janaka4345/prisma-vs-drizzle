import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonCountOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        addon_name: z.lazy(() => SortOrderSchema).optional(),
        Price: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const AddonCountOrderByAggregateInputObjectSchema = Schema
