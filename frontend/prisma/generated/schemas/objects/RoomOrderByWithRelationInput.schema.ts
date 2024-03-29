import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { FloorOrderByWithRelationInputObjectSchema } from './FloorOrderByWithRelationInput.schema'
import { Room_classOrderByWithRelationInputObjectSchema } from './Room_classOrderByWithRelationInput.schema'
import { Room_statusOrderByWithRelationInputObjectSchema } from './Room_statusOrderByWithRelationInput.schema'
import { booking_roomOrderByRelationAggregateInputObjectSchema } from './booking_roomOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        room_number: z.lazy(() => SortOrderSchema).optional(),
        floorId: z.lazy(() => SortOrderSchema).optional(),
        room_classId: z.lazy(() => SortOrderSchema).optional(),
        statusId: z.lazy(() => SortOrderSchema).optional(),
        floor: z
            .lazy(() => FloorOrderByWithRelationInputObjectSchema)
            .optional(),
        room_class: z
            .lazy(() => Room_classOrderByWithRelationInputObjectSchema)
            .optional(),
        status: z
            .lazy(() => Room_statusOrderByWithRelationInputObjectSchema)
            .optional(),
        booking_room: z
            .lazy(() => booking_roomOrderByRelationAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const RoomOrderByWithRelationInputObjectSchema = Schema
