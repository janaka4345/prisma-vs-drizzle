import { z } from 'zod'
import { Bed_typeUpdateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeUpdateWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeUncheckedUpdateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeUncheckedUpdateWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeCreateWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeUpsertWithoutRoom_class_bed_typeInput> =
    z
        .object({
            update: z.union([
                z.lazy(
                    () =>
                        Bed_typeUpdateWithoutRoom_class_bed_typeInputObjectSchema
                ),
                z.lazy(
                    () =>
                        Bed_typeUncheckedUpdateWithoutRoom_class_bed_typeInputObjectSchema
                ),
            ]),
            create: z.union([
                z.lazy(
                    () =>
                        Bed_typeCreateWithoutRoom_class_bed_typeInputObjectSchema
                ),
                z.lazy(
                    () =>
                        Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema
                ),
            ]),
        })
        .strict()

export const Bed_typeUpsertWithoutRoom_class_bed_typeInputObjectSchema = Schema
