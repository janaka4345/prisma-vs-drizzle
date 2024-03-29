import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeCreateManyBed_typeInput> = z
    .object({
        room_classId: z.string(),
        num_of_beds: z.number(),
    })
    .strict()

export const room_class_bed_typeCreateManyBed_typeInputObjectSchema = Schema
