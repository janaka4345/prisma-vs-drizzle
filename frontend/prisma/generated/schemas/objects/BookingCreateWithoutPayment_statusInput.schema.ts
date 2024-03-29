import { z } from 'zod'
import { GuestCreateNestedOneWithoutBookingInputObjectSchema } from './GuestCreateNestedOneWithoutBookingInput.schema'
import { booking_addonCreateNestedManyWithoutBookingInputObjectSchema } from './booking_addonCreateNestedManyWithoutBookingInput.schema'
import { booking_roomCreateNestedManyWithoutBookingInputObjectSchema } from './booking_roomCreateNestedManyWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateWithoutPayment_statusInput> = z
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

export const BookingCreateWithoutPayment_statusInputObjectSchema = Schema
