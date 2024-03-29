import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestMaxAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        first_name: z.literal(true).optional(),
        last_name: z.literal(true).optional(),
        email: z.literal(true).optional(),
        phone_no: z.literal(true).optional(),
    })
    .strict()

export const GuestMaxAggregateInputObjectSchema = Schema
