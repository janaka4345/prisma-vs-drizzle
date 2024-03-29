import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorWhereUniqueInput> = z
    .object({
        id: z.string().optional(),
        floor_number: z.number().optional(),
    })
    .strict()

export const FloorWhereUniqueInputObjectSchema = Schema
