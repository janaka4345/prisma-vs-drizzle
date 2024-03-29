import { z } from 'zod'
import { room_class_bed_typeCreateWithoutBed_typeInputObjectSchema } from './room_class_bed_typeCreateWithoutBed_typeInput.schema'
import { room_class_bed_typeUncheckedCreateWithoutBed_typeInputObjectSchema } from './room_class_bed_typeUncheckedCreateWithoutBed_typeInput.schema'
import { room_class_bed_typeCreateOrConnectWithoutBed_typeInputObjectSchema } from './room_class_bed_typeCreateOrConnectWithoutBed_typeInput.schema'
import { room_class_bed_typeUpsertWithWhereUniqueWithoutBed_typeInputObjectSchema } from './room_class_bed_typeUpsertWithWhereUniqueWithoutBed_typeInput.schema'
import { room_class_bed_typeCreateManyBed_typeInputEnvelopeObjectSchema } from './room_class_bed_typeCreateManyBed_typeInputEnvelope.schema'
import { room_class_bed_typeWhereUniqueInputObjectSchema } from './room_class_bed_typeWhereUniqueInput.schema'
import { room_class_bed_typeUpdateWithWhereUniqueWithoutBed_typeInputObjectSchema } from './room_class_bed_typeUpdateWithWhereUniqueWithoutBed_typeInput.schema'
import { room_class_bed_typeUpdateManyWithWhereWithoutBed_typeInputObjectSchema } from './room_class_bed_typeUpdateManyWithWhereWithoutBed_typeInput.schema'
import { room_class_bed_typeScalarWhereInputObjectSchema } from './room_class_bed_typeScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeUncheckedUpdateManyWithoutBed_typeNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeCreateWithoutBed_typeInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeCreateWithoutBed_typeInputObjectSchema
                        )
                        .array(),
                    z.lazy(
                        () =>
                            room_class_bed_typeUncheckedCreateWithoutBed_typeInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeUncheckedCreateWithoutBed_typeInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeCreateOrConnectWithoutBed_typeInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeCreateOrConnectWithoutBed_typeInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeUpsertWithWhereUniqueWithoutBed_typeInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeUpsertWithWhereUniqueWithoutBed_typeInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () =>
                        room_class_bed_typeCreateManyBed_typeInputEnvelopeObjectSchema
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
                            room_class_bed_typeUpdateWithWhereUniqueWithoutBed_typeInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeUpdateWithWhereUniqueWithoutBed_typeInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeUpdateManyWithWhereWithoutBed_typeInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeUpdateManyWithWhereWithoutBed_typeInputObjectSchema
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

export const room_class_bed_typeUncheckedUpdateManyWithoutBed_typeNestedInputObjectSchema =
    Schema
