import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateManyFloorInput> = z
    .object({
        id: z.string().optional(),
        room_number: z.number(),
        room_classId: z.string(),
        statusId: z.string(),
    })
    .strict()

export const RoomCreateManyFloorInputObjectSchema = Schema
