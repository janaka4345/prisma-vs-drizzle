import { z } from 'zod'
import { BookingCreateWithoutBooking_addonInputObjectSchema } from './BookingCreateWithoutBooking_addonInput.schema'
import { BookingUncheckedCreateWithoutBooking_addonInputObjectSchema } from './BookingUncheckedCreateWithoutBooking_addonInput.schema'
import { BookingCreateOrConnectWithoutBooking_addonInputObjectSchema } from './BookingCreateOrConnectWithoutBooking_addonInput.schema'
import { BookingUpsertWithoutBooking_addonInputObjectSchema } from './BookingUpsertWithoutBooking_addonInput.schema'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingUpdateWithoutBooking_addonInputObjectSchema } from './BookingUpdateWithoutBooking_addonInput.schema'
import { BookingUncheckedUpdateWithoutBooking_addonInputObjectSchema } from './BookingUncheckedUpdateWithoutBooking_addonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUpdateOneRequiredWithoutBooking_addonNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => BookingCreateWithoutBooking_addonInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            BookingUncheckedCreateWithoutBooking_addonInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        BookingCreateOrConnectWithoutBooking_addonInputObjectSchema
                )
                .optional(),
            upsert: z
                .lazy(() => BookingUpsertWithoutBooking_addonInputObjectSchema)
                .optional(),
            connect: z
                .lazy(() => BookingWhereUniqueInputObjectSchema)
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () => BookingUpdateWithoutBooking_addonInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            BookingUncheckedUpdateWithoutBooking_addonInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const BookingUpdateOneRequiredWithoutBooking_addonNestedInputObjectSchema =
    Schema
