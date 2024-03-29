import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusMinAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        status: z.literal(true).optional(),
    })
    .strict()

export const Room_statusMinAggregateInputObjectSchema = Schema
