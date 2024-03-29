import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusWhereUniqueInput> = z
    .object({
        id: z.string().optional(),
        status: z.string().optional(),
    })
    .strict()

export const Room_statusWhereUniqueInputObjectSchema = Schema
