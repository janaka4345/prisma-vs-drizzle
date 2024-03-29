import { z } from 'zod'
import { booking_addonCreateWithoutBookingInputObjectSchema } from './booking_addonCreateWithoutBookingInput.schema'
import { booking_addonUncheckedCreateWithoutBookingInputObjectSchema } from './booking_addonUncheckedCreateWithoutBookingInput.schema'
import { booking_addonCreateOrConnectWithoutBookingInputObjectSchema } from './booking_addonCreateOrConnectWithoutBookingInput.schema'
import { booking_addonUpsertWithWhereUniqueWithoutBookingInputObjectSchema } from './booking_addonUpsertWithWhereUniqueWithoutBookingInput.schema'
import { booking_addonCreateManyBookingInputEnvelopeObjectSchema } from './booking_addonCreateManyBookingInputEnvelope.schema'
import { booking_addonWhereUniqueInputObjectSchema } from './booking_addonWhereUniqueInput.schema'
import { booking_addonUpdateWithWhereUniqueWithoutBookingInputObjectSchema } from './booking_addonUpdateWithWhereUniqueWithoutBookingInput.schema'
import { booking_addonUpdateManyWithWhereWithoutBookingInputObjectSchema } from './booking_addonUpdateManyWithWhereWithoutBookingInput.schema'
import { booking_addonScalarWhereInputObjectSchema } from './booking_addonScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUpdateManyWithoutBookingNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => booking_addonCreateWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonCreateWithoutBookingInputObjectSchema
                        )
                        .array(),
                    z.lazy(
                        () =>
                            booking_addonUncheckedCreateWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonUncheckedCreateWithoutBookingInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            booking_addonCreateOrConnectWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonCreateOrConnectWithoutBookingInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            booking_addonUpsertWithWhereUniqueWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonUpsertWithWhereUniqueWithoutBookingInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () =>
                        booking_addonCreateManyBookingInputEnvelopeObjectSchema
                )
                .optional(),
            set: z
                .union([
                    z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_addonWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_addonWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_addonWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_addonWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            booking_addonUpdateWithWhereUniqueWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonUpdateWithWhereUniqueWithoutBookingInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            booking_addonUpdateManyWithWhereWithoutBookingInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonUpdateManyWithWhereWithoutBookingInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => booking_addonScalarWhereInputObjectSchema),
                    z
                        .lazy(() => booking_addonScalarWhereInputObjectSchema)
                        .array(),
                ])
                .optional(),
        })
        .strict()

export const booking_addonUpdateManyWithoutBookingNestedInputObjectSchema =
    Schema
