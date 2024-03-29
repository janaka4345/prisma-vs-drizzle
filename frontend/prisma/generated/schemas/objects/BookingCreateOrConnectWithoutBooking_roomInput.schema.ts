import { z } from 'zod'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingCreateWithoutBooking_roomInputObjectSchema } from './BookingCreateWithoutBooking_roomInput.schema'
import { BookingUncheckedCreateWithoutBooking_roomInputObjectSchema } from './BookingUncheckedCreateWithoutBooking_roomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateOrConnectWithoutBooking_roomInput> =
    z
        .object({
            where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(() => BookingCreateWithoutBooking_roomInputObjectSchema),
                z.lazy(
                    () =>
                        BookingUncheckedCreateWithoutBooking_roomInputObjectSchema
                ),
            ]),
        })
        .strict()

export const BookingCreateOrConnectWithoutBooking_roomInputObjectSchema = Schema
