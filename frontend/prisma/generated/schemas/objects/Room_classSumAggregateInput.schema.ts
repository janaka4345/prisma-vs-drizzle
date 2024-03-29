import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classSumAggregateInputType> = z
    .object({
        base_price: z.literal(true).optional(),
    })
    .strict()

export const Room_classSumAggregateInputObjectSchema = Schema
