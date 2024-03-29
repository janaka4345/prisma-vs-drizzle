import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingWhereUniqueInput> = z
    .object({
        id: z.string().optional(),
    })
    .strict()

export const BookingWhereUniqueInputObjectSchema = Schema
