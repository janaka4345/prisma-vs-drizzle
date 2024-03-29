import { z } from 'zod'
import { room_class_bed_typeRoom_classIdBed_typeIdCompoundUniqueInputObjectSchema } from './room_class_bed_typeRoom_classIdBed_typeIdCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeWhereUniqueInput> = z
    .object({
        room_classId_bed_typeId: z
            .lazy(
                () =>
                    room_class_bed_typeRoom_classIdBed_typeIdCompoundUniqueInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const room_class_bed_typeWhereUniqueInputObjectSchema = Schema
