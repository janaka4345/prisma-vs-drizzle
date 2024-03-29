import { z } from 'zod'
import { room_class_bed_typeCreateWithoutRoom_classInputObjectSchema } from './room_class_bed_typeCreateWithoutRoom_classInput.schema'
import { room_class_bed_typeUncheckedCreateWithoutRoom_classInputObjectSchema } from './room_class_bed_typeUncheckedCreateWithoutRoom_classInput.schema'
import { room_class_bed_typeCreateOrConnectWithoutRoom_classInputObjectSchema } from './room_class_bed_typeCreateOrConnectWithoutRoom_classInput.schema'
import { room_class_bed_typeCreateManyRoom_classInputEnvelopeObjectSchema } from './room_class_bed_typeCreateManyRoom_classInputEnvelope.schema'
import { room_class_bed_typeWhereUniqueInputObjectSchema } from './room_class_bed_typeWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeCreateNestedManyWithoutRoom_classInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeCreateWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeCreateWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                    z.lazy(
                        () =>
                            room_class_bed_typeUncheckedCreateWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeUncheckedCreateWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeCreateOrConnectWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeCreateOrConnectWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () =>
                        room_class_bed_typeCreateManyRoom_classInputEnvelopeObjectSchema
                )
                .optional(),
            connect: z
                .union([
                    z.lazy(
                        () => room_class_bed_typeWhereUniqueInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeWhereUniqueInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
        })
        .strict()

export const room_class_bed_typeCreateNestedManyWithoutRoom_classInputObjectSchema =
    Schema
