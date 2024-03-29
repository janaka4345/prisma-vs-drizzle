import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestWhereUniqueInput> = z
    .object({
        id: z.string().optional(),
        email: z.string().optional(),
    })
    .strict()

export const GuestWhereUniqueInputObjectSchema = Schema
