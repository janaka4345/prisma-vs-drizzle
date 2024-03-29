import { z } from 'zod'
import { BookingCreateWithoutGuestInputObjectSchema } from './BookingCreateWithoutGuestInput.schema'
import { BookingUncheckedCreateWithoutGuestInputObjectSchema } from './BookingUncheckedCreateWithoutGuestInput.schema'
import { BookingCreateOrConnectWithoutGuestInputObjectSchema } from './BookingCreateOrConnectWithoutGuestInput.schema'
import { BookingUpsertWithWhereUniqueWithoutGuestInputObjectSchema } from './BookingUpsertWithWhereUniqueWithoutGuestInput.schema'
import { BookingCreateManyGuestInputEnvelopeObjectSchema } from './BookingCreateManyGuestInputEnvelope.schema'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingUpdateWithWhereUniqueWithoutGuestInputObjectSchema } from './BookingUpdateWithWhereUniqueWithoutGuestInput.schema'
import { BookingUpdateManyWithWhereWithoutGuestInputObjectSchema } from './BookingUpdateManyWithWhereWithoutGuestInput.schema'
import { BookingScalarWhereInputObjectSchema } from './BookingScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutGuestNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => BookingCreateWithoutGuestInputObjectSchema),
                    z
                        .lazy(() => BookingCreateWithoutGuestInputObjectSchema)
                        .array(),
                    z.lazy(
                        () =>
                            BookingUncheckedCreateWithoutGuestInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingUncheckedCreateWithoutGuestInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            BookingCreateOrConnectWithoutGuestInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingCreateOrConnectWithoutGuestInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            BookingUpsertWithWhereUniqueWithoutGuestInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingUpsertWithWhereUniqueWithoutGuestInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(() => BookingCreateManyGuestInputEnvelopeObjectSchema)
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
                            BookingUpdateWithWhereUniqueWithoutGuestInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingUpdateWithWhereUniqueWithoutGuestInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            BookingUpdateManyWithWhereWithoutGuestInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                BookingUpdateManyWithWhereWithoutGuestInputObjectSchema
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

export const BookingUncheckedUpdateManyWithoutGuestNestedInputObjectSchema =
    Schema
