import { z } from 'zod'
import { room_class_bed_typeWhereUniqueInputObjectSchema } from './room_class_bed_typeWhereUniqueInput.schema'
import { room_class_bed_typeUpdateWithoutRoom_classInputObjectSchema } from './room_class_bed_typeUpdateWithoutRoom_classInput.schema'
import { room_class_bed_typeUncheckedUpdateWithoutRoom_classInputObjectSchema } from './room_class_bed_typeUncheckedUpdateWithoutRoom_classInput.schema'
import { room_class_bed_typeCreateWithoutRoom_classInputObjectSchema } from './room_class_bed_typeCreateWithoutRoom_classInput.schema'
import { room_class_bed_typeUncheckedCreateWithoutRoom_classInputObjectSchema } from './room_class_bed_typeUncheckedCreateWithoutRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeUpsertWithWhereUniqueWithoutRoom_classInput> =
    z
        .object({
            where: z.lazy(
                () => room_class_bed_typeWhereUniqueInputObjectSchema
            ),
            update: z.union([
                z.lazy(
                    () =>
                        room_class_bed_typeUpdateWithoutRoom_classInputObjectSchema
                ),
                z.lazy(
                    () =>
                        room_class_bed_typeUncheckedUpdateWithoutRoom_classInputObjectSchema
                ),
            ]),
            create: z.union([
                z.lazy(
                    () =>
                        room_class_bed_typeCreateWithoutRoom_classInputObjectSchema
                ),
                z.lazy(
                    () =>
                        room_class_bed_typeUncheckedCreateWithoutRoom_classInputObjectSchema
                ),
            ]),
        })
        .strict()

export const room_class_bed_typeUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema =
    Schema
