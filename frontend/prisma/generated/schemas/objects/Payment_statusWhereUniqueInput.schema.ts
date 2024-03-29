import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusWhereUniqueInput> = z
    .object({
        id: z.string().optional(),
        status: z.string().optional(),
    })
    .strict()

export const Payment_statusWhereUniqueInputObjectSchema = Schema
