import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateManyRoom_classInput> = z
    .object({
        id: z.string().optional(),
        room_number: z.number(),
        floorId: z.string(),
        statusId: z.string(),
    })
    .strict()

export const RoomCreateManyRoom_classInputObjectSchema = Schema
