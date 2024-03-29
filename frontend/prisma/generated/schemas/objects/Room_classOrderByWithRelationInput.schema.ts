import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RoomOrderByRelationAggregateInputObjectSchema } from './RoomOrderByRelationAggregateInput.schema'
import { room_class_bed_typeOrderByRelationAggregateInputObjectSchema } from './room_class_bed_typeOrderByRelationAggregateInput.schema'
import { roomclass_featureOrderByRelationAggregateInputObjectSchema } from './roomclass_featureOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        class_name: z.lazy(() => SortOrderSchema).optional(),
        base_price: z.lazy(() => SortOrderSchema).optional(),
        Room: z
            .lazy(() => RoomOrderByRelationAggregateInputObjectSchema)
            .optional(),
        room_class_bed_type: z
            .lazy(
                () =>
                    room_class_bed_typeOrderByRelationAggregateInputObjectSchema
            )
            .optional(),
        roomclass_feature: z
            .lazy(
                () => roomclass_featureOrderByRelationAggregateInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Room_classOrderByWithRelationInputObjectSchema = Schema
