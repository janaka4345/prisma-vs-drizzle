import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeRoom_classIdBed_typeIdCompoundUniqueInput> =
    z
        .object({
            room_classId: z.string(),
            bed_typeId: z.string(),
        })
        .strict()

export const room_class_bed_typeRoom_classIdBed_typeIdCompoundUniqueInputObjectSchema =
    Schema
