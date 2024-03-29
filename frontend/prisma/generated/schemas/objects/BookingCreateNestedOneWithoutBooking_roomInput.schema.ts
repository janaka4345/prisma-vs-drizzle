import { z } from 'zod'
import { BookingCreateWithoutBooking_roomInputObjectSchema } from './BookingCreateWithoutBooking_roomInput.schema'
import { BookingUncheckedCreateWithoutBooking_roomInputObjectSchema } from './BookingUncheckedCreateWithoutBooking_roomInput.schema'
import { BookingCreateOrConnectWithoutBooking_roomInputObjectSchema } from './BookingCreateOrConnectWithoutBooking_roomInput.schema'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateNestedOneWithoutBooking_roomInput> =
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
            connect: z
                .lazy(() => BookingWhereUniqueInputObjectSchema)
                .optional(),
        })
        .strict()

export const BookingCreateNestedOneWithoutBooking_roomInputObjectSchema = Schema
