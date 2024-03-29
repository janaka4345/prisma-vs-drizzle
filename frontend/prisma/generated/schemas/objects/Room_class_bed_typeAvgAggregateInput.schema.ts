import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_class_bed_typeAvgAggregateInputType> = z
    .object({
        num_of_beds: z.literal(true).optional(),
    })
    .strict()

export const Room_class_bed_typeAvgAggregateInputObjectSchema = Schema
