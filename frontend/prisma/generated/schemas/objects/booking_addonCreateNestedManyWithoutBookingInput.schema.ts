import { z } from 'zod'
import { booking_addonCreateWithoutBookingInputObjectSchema } from './booking_addonCreateWithoutBookingInput.schema'
import { booking_addonUncheckedCreateWithoutBookingInputObjectSchema } from './booking_addonUncheckedCreateWithoutBookingInput.schema'
import { booking_addonCreateOrConnectWithoutBookingInputObjectSchema } from './booking_addonCreateOrConnectWithoutBookingInput.schema'
import { booking_addonCreateManyBookingInputEnvelopeObjectSchema } from './booking_addonCreateManyBookingInputEnvelope.schema'
import { booking_addonWhereUniqueInputObjectSchema } from './booking_addonWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonCreateNestedManyWithoutBookingInput> =
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
            createMany: z
                .lazy(
                    () =>
                        booking_addonCreateManyBookingInputEnvelopeObjectSchema
                )
                .optional(),
            connect: z
                .union([
                    z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_addonWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
        })
        .strict()

export const booking_addonCreateNestedManyWithoutBookingInputObjectSchema =
    Schema
