import { z } from 'zod'
import { room_class_bed_typeCreateWithoutRoom_classInputObjectSchema } from './room_class_bed_typeCreateWithoutRoom_classInput.schema'
import { room_class_bed_typeUncheckedCreateWithoutRoom_classInputObjectSchema } from './room_class_bed_typeUncheckedCreateWithoutRoom_classInput.schema'
import { room_class_bed_typeCreateOrConnectWithoutRoom_classInputObjectSchema } from './room_class_bed_typeCreateOrConnectWithoutRoom_classInput.schema'
import { room_class_bed_typeUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema } from './room_class_bed_typeUpsertWithWhereUniqueWithoutRoom_classInput.schema'
import { room_class_bed_typeCreateManyRoom_classInputEnvelopeObjectSchema } from './room_class_bed_typeCreateManyRoom_classInputEnvelope.schema'
import { room_class_bed_typeWhereUniqueInputObjectSchema } from './room_class_bed_typeWhereUniqueInput.schema'
import { room_class_bed_typeUpdateWithWhereUniqueWithoutRoom_classInputObjectSchema } from './room_class_bed_typeUpdateWithWhereUniqueWithoutRoom_classInput.schema'
import { room_class_bed_typeUpdateManyWithWhereWithoutRoom_classInputObjectSchema } from './room_class_bed_typeUpdateManyWithWhereWithoutRoom_classInput.schema'
import { room_class_bed_typeScalarWhereInputObjectSchema } from './room_class_bed_typeScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeUpdateManyWithoutRoom_classNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema
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
            set: z
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
            disconnect: z
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
            delete: z
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
            update: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeUpdateWithWhereUniqueWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeUpdateWithWhereUniqueWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeUpdateManyWithWhereWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeUpdateManyWithWhereWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(
                        () => room_class_bed_typeScalarWhereInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeScalarWhereInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
        })
        .strict()

export const room_class_bed_typeUpdateManyWithoutRoom_classNestedInputObjectSchema =
    Schema
