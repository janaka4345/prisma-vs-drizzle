import { z } from 'zod'
import { Bed_typeCreateNestedOneWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeCreateNestedOneWithoutRoom_class_bed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeCreateWithoutRoom_classInput> =
    z
        .object({
            num_of_beds: z.number(),
            bed_type: z.lazy(
                () =>
                    Bed_typeCreateNestedOneWithoutRoom_class_bed_typeInputObjectSchema
            ),
        })
        .strict()

export const room_class_bed_typeCreateWithoutRoom_classInputObjectSchema =
    Schema
