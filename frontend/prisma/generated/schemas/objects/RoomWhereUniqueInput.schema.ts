import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomWhereUniqueInput> = z
    .object({
        id: z.string().optional(),
        room_number: z.number().optional(),
    })
    .strict()

export const RoomWhereUniqueInputObjectSchema = Schema
