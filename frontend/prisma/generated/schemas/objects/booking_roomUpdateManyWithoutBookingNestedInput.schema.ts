import { z } from 'zod'
import { booking_roomCreateWithoutBookingInputObjectSchema } from './booking_roomCreateWithoutBookingInput.schema'
import { booking_roomUncheckedCreateWithoutBookingInputObjectSchema } from './booking_roomUncheckedCreateWithoutBookingInput.schema'
import { booking_roomCreateOrConnectWithoutBookingInputObjectSchema } from './booking_roomCreateOrConnectWithoutBookingInput.schema'
import { booking_roomUpsertWithWhereUniqueWithoutBookingInputObjectSchema } from './booking_roomUpsertWithWhereUniqueWithoutBookingInput.schema'
import { booking_roomCreateManyBookingInputEnvelopeObjectSchema } from './booking_roomCreateManyBookingInputEnvelope.schema'
import { booking_roomWhereUniqueInputObjectSchema } from './booking_roomWhereUniqueInput.schema'
import { booking_roomUpdateWithWhereUniqueWithoutBookingInputObjectSchema } from './booking_roomUpdateWithWhereUniqueWithoutBookingInput.schema'
import { booking_roomUpdateManyWithWhereWithoutBookingInputObjectSchema } from './booking_roomUpdateManyWithWhereWithoutBookingInput.schema'
import { booking_roomScalarWhereInputObjectSchema } from './booking_roomScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUpdateManyWithoutBookingNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => booking_roomCreateWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_roomCreateWithoutBookingInputObjectSchema
                        )
                        .array(),
                    z.lazy(
                        () =>
                            booking_roomUncheckedCreateWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_roomUncheckedCreateWithoutBookingInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            booking_roomCreateOrConnectWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_roomCreateOrConnectWithoutBookingInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            booking_roomUpsertWithWhereUniqueWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_roomUpsertWithWhereUniqueWithoutBookingInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () => booking_roomCreateManyBookingInputEnvelopeObjectSchema
                )
                .optional(),
            set: z
                .union([
                    z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_roomWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_roomWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_roomWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_roomWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            booking_roomUpdateWithWhereUniqueWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_roomUpdateWithWhereUniqueWithoutBookingInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            booking_roomUpdateManyWithWhereWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_roomUpdateManyWithWhereWithoutBookingInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => booking_roomScalarWhereInputObjectSchema),
                    z
                        .lazy(() => booking_roomScalarWhereInputObjectSchema)
                        .array(),
                ])
                .optional(),
        })
        .strict()

export const booking_roomUpdateManyWithoutBookingNestedInputObjectSchema =
    Schema
