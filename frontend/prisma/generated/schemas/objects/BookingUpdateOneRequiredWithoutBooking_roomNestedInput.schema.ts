import { z } from 'zod'
import { BookingCreateWithoutBooking_roomInputObjectSchema } from './BookingCreateWithoutBooking_roomInput.schema'
import { BookingUncheckedCreateWithoutBooking_roomInputObjectSchema } from './BookingUncheckedCreateWithoutBooking_roomInput.schema'
import { BookingCreateOrConnectWithoutBooking_roomInputObjectSchema } from './BookingCreateOrConnectWithoutBooking_roomInput.schema'
import { BookingUpsertWithoutBooking_roomInputObjectSchema } from './BookingUpsertWithoutBooking_roomInput.schema'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingUpdateWithoutBooking_roomInputObjectSchema } from './BookingUpdateWithoutBooking_roomInput.schema'
import { BookingUncheckedUpdateWithoutBooking_roomInputObjectSchema } from './BookingUncheckedUpdateWithoutBooking_roomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUpdateOneRequiredWithoutBooking_roomNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => BookingCreateWithoutBooking_roomInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            BookingUncheckedCreateWithoutBooking_roomInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        BookingCreateOrConnectWithoutBooking_roomInputObjectSchema
                )
                .optional(),
            upsert: z
                .lazy(() => BookingUpsertWithoutBooking_roomInputObjectSchema)
                .optional(),
            connect: z
                .lazy(() => BookingWhereUniqueInputObjectSchema)
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () => BookingUpdateWithoutBooking_roomInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            BookingUncheckedUpdateWithoutBooking_roomInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const BookingUpdateOneRequiredWithoutBooking_roomNestedInputObjectSchema =
    Schema
