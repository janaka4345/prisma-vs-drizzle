import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { roomclass_featureOrderByRelationAggregateInputObjectSchema } from './roomclass_featureOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        feature_name: z.lazy(() => SortOrderSchema).optional(),
        roomclass_feature: z
            .lazy(
                () => roomclass_featureOrderByRelationAggregateInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const FeatureOrderByWithRelationInputObjectSchema = Schema
