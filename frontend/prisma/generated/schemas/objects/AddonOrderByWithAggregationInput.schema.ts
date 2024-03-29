import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AddonCountOrderByAggregateInputObjectSchema } from './AddonCountOrderByAggregateInput.schema'
import { AddonAvgOrderByAggregateInputObjectSchema } from './AddonAvgOrderByAggregateInput.schema'
import { AddonMaxOrderByAggregateInputObjectSchema } from './AddonMaxOrderByAggregateInput.schema'
import { AddonMinOrderByAggregateInputObjectSchema } from './AddonMinOrderByAggregateInput.schema'
import { AddonSumOrderByAggregateInputObjectSchema } from './AddonSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        addon_name: z.lazy(() => SortOrderSchema).optional(),
        Price: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => AddonCountOrderByAggregateInputObjectSchema)
            .optional(),
        _avg: z
            .lazy(() => AddonAvgOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => AddonMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => AddonMinOrderByAggregateInputObjectSchema)
            .optional(),
        _sum: z
            .lazy(() => AddonSumOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const AddonOrderByWithAggregationInputObjectSchema = Schema
