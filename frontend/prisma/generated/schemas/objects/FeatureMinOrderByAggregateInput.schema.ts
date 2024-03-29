import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        feature_name: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const FeatureMinOrderByAggregateInputObjectSchema = Schema
