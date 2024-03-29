import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomAvgAggregateInputType> = z
    .object({
        room_number: z.literal(true).optional(),
    })
    .strict()

export const RoomAvgAggregateInputObjectSchema = Schema
