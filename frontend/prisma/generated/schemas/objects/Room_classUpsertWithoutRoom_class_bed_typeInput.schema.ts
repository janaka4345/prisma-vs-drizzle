import { z } from 'zod'
import { Room_classUpdateWithoutRoom_class_bed_typeInputObjectSchema } from './Room_classUpdateWithoutRoom_class_bed_typeInput.schema'
import { Room_classUncheckedUpdateWithoutRoom_class_bed_typeInputObjectSchema } from './Room_classUncheckedUpdateWithoutRoom_class_bed_typeInput.schema'
import { Room_classCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Room_classCreateWithoutRoom_class_bed_typeInput.schema'
import { Room_classUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Room_classUncheckedCreateWithoutRoom_class_bed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classUpsertWithoutRoom_class_bed_typeInput> =
    z
        .object({
            update: z.union([
                z.lazy(
                    () =>
                        Room_classUpdateWithoutRoom_class_bed_typeInputObjectSchema
                ),
                z.lazy(
                    () =>
                        Room_classUncheckedUpdateWithoutRoom_class_bed_typeInputObjectSchema
                ),
            ]),
            create: z.union([
                z.lazy(
                    () =>
                        Room_classCreateWithoutRoom_class_bed_typeInputObjectSchema
                ),
                z.lazy(
                    () =>
                        Room_classUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema
                ),
            ]),
        })
        .strict()

export const Room_classUpsertWithoutRoom_class_bed_typeInputObjectSchema =
    Schema
