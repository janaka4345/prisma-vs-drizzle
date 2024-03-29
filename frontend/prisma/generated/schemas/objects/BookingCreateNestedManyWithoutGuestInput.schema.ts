import { z } from 'zod'
import { BookingCreateWithoutGuestInputObjectSchema } from './BookingCreateWithoutGuestInput.schema'
import { BookingUncheckedCreateWithoutGuestInputObjectSchema } from './BookingUncheckedCreateWithoutGuestInput.schema'
import { BookingCreateOrConnectWithoutGuestInputObjectSchema } from './BookingCreateOrConnectWithoutGuestInput.schema'
import { BookingCreateManyGuestInputEnvelopeObjectSchema } from './BookingCreateManyGuestInputEnvelope.schema'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateNestedManyWithoutGuestInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => BookingCreateWithoutGuestInputObjectSchema),
                z
                    .lazy(() => BookingCreateWithoutGuestInputObjectSchema)
                    .array(),
                z.lazy(
                    () => BookingUncheckedCreateWithoutGuestInputObjectSchema
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
                    () => BookingCreateOrConnectWithoutGuestInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            BookingCreateOrConnectWithoutGuestInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => BookingCreateManyGuestInputEnvelopeObjectSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => BookingWhereUniqueInputObjectSchema),
                z.lazy(() => BookingWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict()

export const BookingCreateNestedManyWithoutGuestInputObjectSchema = Schema
