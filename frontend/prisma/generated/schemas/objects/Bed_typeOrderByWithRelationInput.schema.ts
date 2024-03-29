import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { room_class_bed_typeOrderByRelationAggregateInputObjectSchema } from './room_class_bed_typeOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        bed_type: z.lazy(() => SortOrderSchema).optional(),
        room_class_bed_type: z
            .lazy(
                () =>
                    room_class_bed_typeOrderByRelationAggregateInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Bed_typeOrderByWithRelationInputObjectSchema = Schema
