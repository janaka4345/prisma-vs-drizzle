import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateManyInput> = z
    .object({
        id: z.string().optional(),
        room_number: z.number(),
        floorId: z.string(),
        room_classId: z.string(),
        statusId: z.string(),
    })
    .strict()

export const RoomCreateManyInputObjectSchema = Schema
