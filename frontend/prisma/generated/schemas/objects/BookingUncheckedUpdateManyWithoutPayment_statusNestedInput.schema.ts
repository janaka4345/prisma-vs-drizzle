import { z } from 'zod'
import { BookingCreateWithoutPayment_statusInputObjectSchema } from './BookingCreateWithoutPayment_statusInput.schema'
import { BookingUncheckedCreateWithoutPayment_statusInputObjectSchema } from './BookingUncheckedCreateWithoutPayment_statusInput.schema'
import { BookingCreateOrConnectWithoutPayment_statusInputObjectSchema } from './BookingCreateOrConnectWithoutPayment_statusInput.schema'
import { BookingUpsertWithWhereUniqueWithoutPayment_statusInputObjectSchema } from './BookingUpsertWithWhereUniqueWithoutPayment_statusInput.schema'
import { BookingCreateManyPayment_statusInputEnvelopeObjectSchema } from './BookingCreateManyPayment_statusInputEnvelope.schema'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingUpdateWithWhereUniqueWithoutPayment_statusInputObjectSchema } from './BookingUpdateWithWhereUniqueWithoutPayment_statusInput.schema'
import { BookingUpdateManyWithWhereWithoutPayment_statusInputObjectSchema } from './BookingUpdateManyWithWhereWithoutPayment_statusInput.schema'
import { BookingScalarWhereInputObjectSchema } from './BookingScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutPayment_statusNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            BookingUpsertWithWhereUniqueWithoutPayment_statusInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingUpsertWithWhereUniqueWithoutPayment_statusInputObjectSchema
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
            set: z
                .union([
                    z.lazy(() => BookingWhereUniqueInputObjectSchema),
                    z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => BookingWhereUniqueInputObjectSchema),
                    z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => BookingWhereUniqueInputObjectSchema),
                    z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => BookingWhereUniqueInputObjectSchema),
                    z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            BookingUpdateWithWhereUniqueWithoutPayment_statusInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingUpdateWithWhereUniqueWithoutPayment_statusInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            BookingUpdateManyWithWhereWithoutPayment_statusInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingUpdateManyWithWhereWithoutPayment_statusInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => BookingScalarWhereInputObjectSchema),
                    z.lazy(() => BookingScalarWhereInputObjectSchema).array(),
                ])
                .optional(),
        })
        .strict()

export const BookingUncheckedUpdateManyWithoutPayment_statusNestedInputObjectSchema =
    Schema
