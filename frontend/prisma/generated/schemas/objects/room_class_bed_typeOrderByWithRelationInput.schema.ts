import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { Room_classOrderByWithRelationInputObjectSchema } from './Room_classOrderByWithRelationInput.schema'
import { Bed_typeOrderByWithRelationInputObjectSchema } from './Bed_typeOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeOrderByWithRelationInput> = z
    .object({
        room_classId: z.lazy(() => SortOrderSchema).optional(),
        bed_typeId: z.lazy(() => SortOrderSchema).optional(),
        num_of_beds: z.lazy(() => SortOrderSchema).optional(),
        room_class: z
            .lazy(() => Room_classOrderByWithRelationInputObjectSchema)
            .optional(),
        bed_type: z
            .lazy(() => Bed_typeOrderByWithRelationInputObjectSchema)
            .optional(),
    })
    .strict()

export const room_class_bed_typeOrderByWithRelationInputObjectSchema = Schema
