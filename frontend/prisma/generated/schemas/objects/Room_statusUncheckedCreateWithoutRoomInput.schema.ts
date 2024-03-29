import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusUncheckedCreateWithoutRoomInput> = z
    .object({
        id: z.string().optional(),
        status: z.string(),
    })
    .strict()

export const Room_statusUncheckedCreateWithoutRoomInputObjectSchema = Schema
