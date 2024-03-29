import { z } from 'zod'
import { BookingUpdateWithoutBooking_addonInputObjectSchema } from './BookingUpdateWithoutBooking_addonInput.schema'
import { BookingUncheckedUpdateWithoutBooking_addonInputObjectSchema } from './BookingUncheckedUpdateWithoutBooking_addonInput.schema'
import { BookingCreateWithoutBooking_addonInputObjectSchema } from './BookingCreateWithoutBooking_addonInput.schema'
import { BookingUncheckedCreateWithoutBooking_addonInputObjectSchema } from './BookingUncheckedCreateWithoutBooking_addonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUpsertWithoutBooking_addonInput> = z
    .object({
        update: z.union([
            z.lazy(() => BookingUpdateWithoutBooking_addonInputObjectSchema),
            z.lazy(
                () =>
                    BookingUncheckedUpdateWithoutBooking_addonInputObjectSchema
            ),
        ]),
        create: z.union([
            z.lazy(() => BookingCreateWithoutBooking_addonInputObjectSchema),
            z.lazy(
                () =>
                    BookingUncheckedCreateWithoutBooking_addonInputObjectSchema
            ),
        ]),
    })
    .strict()

export const BookingUpsertWithoutBooking_addonInputObjectSchema = Schema
