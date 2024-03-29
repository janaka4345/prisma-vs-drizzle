import { z } from 'zod'
import { BookingUpdateWithoutBooking_roomInputObjectSchema } from './BookingUpdateWithoutBooking_roomInput.schema'
import { BookingUncheckedUpdateWithoutBooking_roomInputObjectSchema } from './BookingUncheckedUpdateWithoutBooking_roomInput.schema'
import { BookingCreateWithoutBooking_roomInputObjectSchema } from './BookingCreateWithoutBooking_roomInput.schema'
import { BookingUncheckedCreateWithoutBooking_roomInputObjectSchema } from './BookingUncheckedCreateWithoutBooking_roomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUpsertWithoutBooking_roomInput> = z
    .object({
        update: z.union([
            z.lazy(() => BookingUpdateWithoutBooking_roomInputObjectSchema),
            z.lazy(
                () => BookingUncheckedUpdateWithoutBooking_roomInputObjectSchema
            ),
        ]),
        create: z.union([
            z.lazy(() => BookingCreateWithoutBooking_roomInputObjectSchema),
            z.lazy(
                () => BookingUncheckedCreateWithoutBooking_roomInputObjectSchema
            ),
        ]),
    })
    .strict()

export const BookingUpsertWithoutBooking_roomInputObjectSchema = Schema
