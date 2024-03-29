import { z } from 'zod'
import { GuestCreateNestedOneWithoutBookingInputObjectSchema } from './GuestCreateNestedOneWithoutBookingInput.schema'
import { Payment_statusCreateNestedOneWithoutBookingInputObjectSchema } from './Payment_statusCreateNestedOneWithoutBookingInput.schema'
import { booking_addonCreateNestedManyWithoutBookingInputObjectSchema } from './booking_addonCreateNestedManyWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateWithoutBooking_roomInput> = z
    .object({
        id: z.string().optional(),
        checkin_date: z.coerce.date(),
        checkout_date: z.coerce.date(),
        num_adults: z.number(),
        num_children: z.number(),
        booking_amount: z.number(),
        guest: z.lazy(
            () => GuestCreateNestedOneWithoutBookingInputObjectSchema
        ),
        payment_status: z
            .lazy(
                () =>
                    Payment_statusCreateNestedOneWithoutBookingInputObjectSchema
            )
            .optional(),
        booking_addon: z
            .lazy(
                () =>
                    booking_addonCreateNestedManyWithoutBookingInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const BookingCreateWithoutBooking_roomInputObjectSchema = Schema
