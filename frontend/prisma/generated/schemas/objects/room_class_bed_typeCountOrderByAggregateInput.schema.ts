import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeCountOrderByAggregateInput> =
    z
        .object({
            room_classId: z.lazy(() => SortOrderSchema).optional(),
            bed_typeId: z.lazy(() => SortOrderSchema).optional(),
            num_of_beds: z.lazy(() => SortOrderSchema).optional(),
        })
        .strict()

export const room_class_bed_typeCountOrderByAggregateInputObjectSchema = Schema
