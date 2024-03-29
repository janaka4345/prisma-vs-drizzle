import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusCountAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        status: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict()

export const Room_statusCountAggregateInputObjectSchema = Schema
