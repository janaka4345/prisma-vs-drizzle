import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeUncheckedCreateInput> = z
    .object({
        room_classId: z.string(),
        bed_typeId: z.string(),
        num_of_beds: z.number(),
    })
    .strict()

export const room_class_bed_typeUncheckedCreateInputObjectSchema = Schema
