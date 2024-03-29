import { z } from 'zod'
import { Room_classCreateNestedOneWithoutRoom_class_bed_typeInputObjectSchema } from './Room_classCreateNestedOneWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeCreateNestedOneWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeCreateNestedOneWithoutRoom_class_bed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeCreateInput> = z
    .object({
        num_of_beds: z.number(),
        room_class: z.lazy(
            () =>
                Room_classCreateNestedOneWithoutRoom_class_bed_typeInputObjectSchema
        ),
        bed_type: z.lazy(
            () =>
                Bed_typeCreateNestedOneWithoutRoom_class_bed_typeInputObjectSchema
        ),
    })
    .strict()

export const room_class_bed_typeCreateInputObjectSchema = Schema
