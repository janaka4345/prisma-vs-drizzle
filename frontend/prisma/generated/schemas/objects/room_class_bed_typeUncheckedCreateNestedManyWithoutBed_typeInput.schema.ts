import { z } from 'zod'
import { room_class_bed_typeCreateWithoutBed_typeInputObjectSchema } from './room_class_bed_typeCreateWithoutBed_typeInput.schema'
import { room_class_bed_typeUncheckedCreateWithoutBed_typeInputObjectSchema } from './room_class_bed_typeUncheckedCreateWithoutBed_typeInput.schema'
import { room_class_bed_typeCreateOrConnectWithoutBed_typeInputObjectSchema } from './room_class_bed_typeCreateOrConnectWithoutBed_typeInput.schema'
import { room_class_bed_typeCreateManyBed_typeInputEnvelopeObjectSchema } from './room_class_bed_typeCreateManyBed_typeInputEnvelope.schema'
import { room_class_bed_typeWhereUniqueInputObjectSchema } from './room_class_bed_typeWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeUncheckedCreateNestedManyWithoutBed_typeInput> =
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
            createMany: z
                .lazy(
                    () =>
                        room_class_bed_typeCreateManyBed_typeInputEnvelopeObjectSchema
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

export const room_class_bed_typeUncheckedCreateNestedManyWithoutBed_typeInputObjectSchema =
    Schema
