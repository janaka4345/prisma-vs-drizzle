import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeWhereUniqueInput> = z
    .object({
        id: z.string().optional(),
        bed_type: z.string().optional(),
    })
    .strict()

export const Bed_typeWhereUniqueInputObjectSchema = Schema
