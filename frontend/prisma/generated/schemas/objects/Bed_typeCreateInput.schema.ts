import { z } from 'zod'
import { room_class_bed_typeCreateNestedManyWithoutBed_typeInputObjectSchema } from './room_class_bed_typeCreateNestedManyWithoutBed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeCreateInput> = z
    .object({
        id: z.string().optional(),
        bed_type: z.string(),
        room_class_bed_type: z
            .lazy(
                () =>
                    room_class_bed_typeCreateNestedManyWithoutBed_typeInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Bed_typeCreateInputObjectSchema = Schema
