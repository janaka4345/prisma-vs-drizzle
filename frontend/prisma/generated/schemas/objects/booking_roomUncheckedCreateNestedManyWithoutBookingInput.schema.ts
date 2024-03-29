import { z } from 'zod'
import { booking_roomCreateWithoutBookingInputObjectSchema } from './booking_roomCreateWithoutBookingInput.schema'
import { booking_roomUncheckedCreateWithoutBookingInputObjectSchema } from './booking_roomUncheckedCreateWithoutBookingInput.schema'
import { booking_roomCreateOrConnectWithoutBookingInputObjectSchema } from './booking_roomCreateOrConnectWithoutBookingInput.schema'
import { booking_roomCreateManyBookingInputEnvelopeObjectSchema } from './booking_roomCreateManyBookingInputEnvelope.schema'
import { booking_roomWhereUniqueInputObjectSchema } from './booking_roomWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUncheckedCreateNestedManyWithoutBookingInput> =
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
            createMany: z
                .lazy(
                    () => booking_roomCreateManyBookingInputEnvelopeObjectSchema
                )
                .optional(),
            connect: z
                .union([
                    z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_roomWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
        })
        .strict()

export const booking_roomUncheckedCreateNestedManyWithoutBookingInputObjectSchema =
    Schema
