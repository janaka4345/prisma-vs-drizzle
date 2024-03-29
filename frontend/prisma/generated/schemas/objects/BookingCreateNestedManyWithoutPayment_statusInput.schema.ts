import { z } from 'zod'
import { BookingCreateWithoutPayment_statusInputObjectSchema } from './BookingCreateWithoutPayment_statusInput.schema'
import { BookingUncheckedCreateWithoutPayment_statusInputObjectSchema } from './BookingUncheckedCreateWithoutPayment_statusInput.schema'
import { BookingCreateOrConnectWithoutPayment_statusInputObjectSchema } from './BookingCreateOrConnectWithoutPayment_statusInput.schema'
import { BookingCreateManyPayment_statusInputEnvelopeObjectSchema } from './BookingCreateManyPayment_statusInputEnvelope.schema'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateNestedManyWithoutPayment_statusInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () =>
                            BookingCreateWithoutPayment_statusInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingCreateWithoutPayment_statusInputObjectSchema
                        )
                        .array(),
                    z.lazy(
                        () =>
                            BookingUncheckedCreateWithoutPayment_statusInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingUncheckedCreateWithoutPayment_statusInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            BookingCreateOrConnectWithoutPayment_statusInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingCreateOrConnectWithoutPayment_statusInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () =>
                        BookingCreateManyPayment_statusInputEnvelopeObjectSchema
                )
                .optional(),
            connect: z
                .union([
                    z.lazy(() => BookingWhereUniqueInputObjectSchema),
                    z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
        })
        .strict()

export const BookingCreateNestedManyWithoutPayment_statusInputObjectSchema =
    Schema
