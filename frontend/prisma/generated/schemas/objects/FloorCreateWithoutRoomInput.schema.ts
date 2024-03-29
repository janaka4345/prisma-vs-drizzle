import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorCreateWithoutRoomInput> = z
    .object({
        id: z.string().optional(),
        floor_number: z.number(),
    })
    .strict()

export const FloorCreateWithoutRoomInputObjectSchema = Schema
