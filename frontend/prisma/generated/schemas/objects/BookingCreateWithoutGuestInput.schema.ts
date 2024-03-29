import { z } from 'zod'
import { Payment_statusCreateNestedOneWithoutBookingInputObjectSchema } from './Payment_statusCreateNestedOneWithoutBookingInput.schema'
import { booking_addonCreateNestedManyWithoutBookingInputObjectSchema } from './booking_addonCreateNestedManyWithoutBookingInput.schema'
import { booking_roomCreateNestedManyWithoutBookingInputObjectSchema } from './booking_roomCreateNestedManyWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateWithoutGuestInput> = z
    .object({
        id: z.string().optional(),
        checkin_date: z.coerce.date(),
        checkout_date: z.coerce.date(),
        num_adults: z.number(),
        num_children: z.number(),
        booking_amount: z.number(),
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
        booking_room: z
            .lazy(
                () =>
                    booking_roomCreateNestedManyWithoutBookingInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const BookingCreateWithoutGuestInputObjectSchema = Schema
