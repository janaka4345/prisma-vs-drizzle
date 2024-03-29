import { z } from 'zod'
import { room_class_bed_typeScalarWhereInputObjectSchema } from './room_class_bed_typeScalarWhereInput.schema'
import { room_class_bed_typeUpdateManyMutationInputObjectSchema } from './room_class_bed_typeUpdateManyMutationInput.schema'
import { room_class_bed_typeUncheckedUpdateManyWithoutRoom_class_bed_typeInputObjectSchema } from './room_class_bed_typeUncheckedUpdateManyWithoutRoom_class_bed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeUpdateManyWithWhereWithoutBed_typeInput> =
    z
        .object({
            where: z.lazy(
                () => room_class_bed_typeScalarWhereInputObjectSchema
            ),
            data: z.union([
                z.lazy(
                    () => room_class_bed_typeUpdateManyMutationInputObjectSchema
                ),
                z.lazy(
                    () =>
                        room_class_bed_typeUncheckedUpdateManyWithoutRoom_class_bed_typeInputObjectSchema
                ),
            ]),
        })
        .strict()

export const room_class_bed_typeUpdateManyWithWhereWithoutBed_typeInputObjectSchema =
    Schema
