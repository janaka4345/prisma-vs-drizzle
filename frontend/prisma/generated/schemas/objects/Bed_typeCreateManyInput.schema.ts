import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeCreateManyInput> = z
    .object({
        id: z.string().optional(),
        bed_type: z.string(),
    })
    .strict()

export const Bed_typeCreateManyInputObjectSchema = Schema
