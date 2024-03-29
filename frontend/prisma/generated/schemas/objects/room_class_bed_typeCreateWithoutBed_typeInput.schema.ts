import { z } from 'zod'
import { Room_classCreateNestedOneWithoutRoom_class_bed_typeInputObjectSchema } from './Room_classCreateNestedOneWithoutRoom_class_bed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeCreateWithoutBed_typeInput> =
    z
        .object({
            num_of_beds: z.number(),
            room_class: z.lazy(
                () =>
                    Room_classCreateNestedOneWithoutRoom_class_bed_typeInputObjectSchema
            ),
        })
        .strict()

export const room_class_bed_typeCreateWithoutBed_typeInputObjectSchema = Schema
