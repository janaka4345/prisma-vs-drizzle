import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorUncheckedCreateWithoutRoomInput> = z
    .object({
        id: z.string().optional(),
        floor_number: z.number(),
    })
    .strict()

export const FloorUncheckedCreateWithoutRoomInputObjectSchema = Schema
