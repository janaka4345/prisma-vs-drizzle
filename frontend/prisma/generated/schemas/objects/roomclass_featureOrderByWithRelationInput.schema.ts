import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FeatureOrderByWithRelationInputObjectSchema } from './FeatureOrderByWithRelationInput.schema'
import { Room_classOrderByWithRelationInputObjectSchema } from './Room_classOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureOrderByWithRelationInput> = z
    .object({
        featureId: z.lazy(() => SortOrderSchema).optional(),
        room_classId: z.lazy(() => SortOrderSchema).optional(),
        feature: z
            .lazy(() => FeatureOrderByWithRelationInputObjectSchema)
            .optional(),
        room_class: z
            .lazy(() => Room_classOrderByWithRelationInputObjectSchema)
            .optional(),
    })
    .strict()

export const roomclass_featureOrderByWithRelationInputObjectSchema = Schema
