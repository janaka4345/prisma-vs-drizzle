import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FeatureCountOrderByAggregateInputObjectSchema } from './FeatureCountOrderByAggregateInput.schema'
import { FeatureMaxOrderByAggregateInputObjectSchema } from './FeatureMaxOrderByAggregateInput.schema'
import { FeatureMinOrderByAggregateInputObjectSchema } from './FeatureMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        feature_name: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => FeatureCountOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => FeatureMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => FeatureMinOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const FeatureOrderByWithAggregationInputObjectSchema = Schema
