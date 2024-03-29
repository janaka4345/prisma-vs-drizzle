import { z } from 'zod'
import { Bed_typeCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeCreateWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeCreateOrConnectWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeCreateOrConnectWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeUpsertWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeUpsertWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeWhereUniqueInputObjectSchema } from './Bed_typeWhereUniqueInput.schema'
import { Bed_typeUpdateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeUpdateWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeUncheckedUpdateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeUncheckedUpdateWithoutRoom_class_bed_typeInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeUpdateOneRequiredWithoutRoom_class_bed_typeNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () =>
                            Bed_typeCreateWithoutRoom_class_bed_typeInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        Bed_typeCreateOrConnectWithoutRoom_class_bed_typeInputObjectSchema
                )
                .optional(),
            upsert: z
                .lazy(
                    () =>
                        Bed_typeUpsertWithoutRoom_class_bed_typeInputObjectSchema
                )
                .optional(),
            connect: z
                .lazy(() => Bed_typeWhereUniqueInputObjectSchema)
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            Bed_typeUpdateWithoutRoom_class_bed_typeInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            Bed_typeUncheckedUpdateWithoutRoom_class_bed_typeInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const Bed_typeUpdateOneRequiredWithoutRoom_class_bed_typeNestedInputObjectSchema =
    Schema
