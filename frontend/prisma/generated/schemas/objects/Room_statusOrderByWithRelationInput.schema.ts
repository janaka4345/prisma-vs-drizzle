import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RoomOrderByRelationAggregateInputObjectSchema } from './RoomOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        status: z.lazy(() => SortOrderSchema).optional(),
        Room: z
            .lazy(() => RoomOrderByRelationAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const Room_statusOrderByWithRelationInputObjectSchema = Schema
