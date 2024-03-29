import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeSumOrderByAggregateInput> = z
    .object({
        num_of_beds: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const room_class_bed_typeSumOrderByAggregateInputObjectSchema = Schema
