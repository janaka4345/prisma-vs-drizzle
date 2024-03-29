import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeUncheckedCreateWithoutBed_typeInput> =
    z
        .object({
            room_classId: z.string(),
            num_of_beds: z.number(),
        })
        .strict()

export const room_class_bed_typeUncheckedCreateWithoutBed_typeInputObjectSchema =
    Schema
