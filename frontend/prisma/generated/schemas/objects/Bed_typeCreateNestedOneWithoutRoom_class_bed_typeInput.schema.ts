import { z } from 'zod'
import { Bed_typeCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeCreateWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeUncheckedCreateWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeCreateOrConnectWithoutRoom_class_bed_typeInputObjectSchema } from './Bed_typeCreateOrConnectWithoutRoom_class_bed_typeInput.schema'
import { Bed_typeWhereUniqueInputObjectSchema } from './Bed_typeWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeCreateNestedOneWithoutRoom_class_bed_typeInput> =
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
            connect: z
                .lazy(() => Bed_typeWhereUniqueInputObjectSchema)
                .optional(),
        })
        .strict()

export const Bed_typeCreateNestedOneWithoutRoom_class_bed_typeInputObjectSchema =
    Schema
