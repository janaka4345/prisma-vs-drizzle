import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomSumAggregateInputType> = z
    .object({
        room_number: z.literal(true).optional(),
    })
    .strict()

export const RoomSumAggregateInputObjectSchema = Schema
