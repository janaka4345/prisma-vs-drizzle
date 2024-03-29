import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classCreateManyInput> = z
    .object({
        id: z.string().optional(),
        class_name: z.string(),
        base_price: z.number(),
    })
    .strict()

export const Room_classCreateManyInputObjectSchema = Schema
