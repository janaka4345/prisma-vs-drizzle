import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RoomOrderByRelationAggregateInputObjectSchema } from './RoomOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        floor_number: z.lazy(() => SortOrderSchema).optional(),
        Room: z
            .lazy(() => RoomOrderByRelationAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const FloorOrderByWithRelationInputObjectSchema = Schema
