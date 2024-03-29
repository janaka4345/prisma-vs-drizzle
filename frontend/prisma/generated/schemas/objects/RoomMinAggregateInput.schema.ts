import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomMinAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        room_number: z.literal(true).optional(),
        floorId: z.literal(true).optional(),
        room_classId: z.literal(true).optional(),
        statusId: z.literal(true).optional(),
    })
    .strict()

export const RoomMinAggregateInputObjectSchema = Schema
