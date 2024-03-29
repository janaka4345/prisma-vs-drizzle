import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_class_bed_typeCountAggregateInputType> = z
    .object({
        room_classId: z.literal(true).optional(),
        bed_typeId: z.literal(true).optional(),
        num_of_beds: z.literal(true).optional(),
        _all: z.literal(true).optional(),
    })
    .strict()

export const Room_class_bed_typeCountAggregateInputObjectSchema = Schema
