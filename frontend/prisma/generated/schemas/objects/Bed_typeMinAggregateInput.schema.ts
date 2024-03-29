import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeMinAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        bed_type: z.literal(true).optional(),
    })
    .strict()

export const Bed_typeMinAggregateInputObjectSchema = Schema
