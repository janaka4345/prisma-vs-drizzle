import { z } from 'zod'
import { room_class_bed_typeWhereUniqueInputObjectSchema } from './room_class_bed_typeWhereUniqueInput.schema'
import { room_class_bed_typeUpdateWithoutBed_typeInputObjectSchema } from './room_class_bed_typeUpdateWithoutBed_typeInput.schema'
import { room_class_bed_typeUncheckedUpdateWithoutBed_typeInputObjectSchema } from './room_class_bed_typeUncheckedUpdateWithoutBed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeUpdateWithWhereUniqueWithoutBed_typeInput> =
    z
        .object({
            where: z.lazy(
                () => room_class_bed_typeWhereUniqueInputObjectSchema
            ),
            data: z.union([
                z.lazy(
                    () =>
                        room_class_bed_typeUpdateWithoutBed_typeInputObjectSchema
                ),
                z.lazy(
                    () =>
                        room_class_bed_typeUncheckedUpdateWithoutBed_typeInputObjectSchema
                ),
            ]),
        })
        .strict()

export const room_class_bed_typeUpdateWithWhereUniqueWithoutBed_typeInputObjectSchema =
    Schema
