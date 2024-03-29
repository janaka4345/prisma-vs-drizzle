import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureCountOrderByAggregateInput> = z
    .object({
        featureId: z.lazy(() => SortOrderSchema).optional(),
        room_classId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict()

export const roomclass_featureCountOrderByAggregateInputObjectSchema = Schema
