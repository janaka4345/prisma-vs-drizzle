import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { roomclass_featureCountOrderByAggregateInputObjectSchema } from './roomclass_featureCountOrderByAggregateInput.schema'
import { roomclass_featureMaxOrderByAggregateInputObjectSchema } from './roomclass_featureMaxOrderByAggregateInput.schema'
import { roomclass_featureMinOrderByAggregateInputObjectSchema } from './roomclass_featureMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureOrderByWithAggregationInput> = z
    .object({
        featureId: z.lazy(() => SortOrderSchema).optional(),
        room_classId: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => roomclass_featureCountOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => roomclass_featureMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => roomclass_featureMinOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const roomclass_featureOrderByWithAggregationInputObjectSchema = Schema
