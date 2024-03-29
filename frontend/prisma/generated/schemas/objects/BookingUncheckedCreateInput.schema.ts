import { z } from 'zod'
import { booking_addonUncheckedCreateNestedManyWithoutBookingInputObjectSchema } from './booking_addonUncheckedCreateNestedManyWithoutBookingInput.schema'
import { booking_roomUncheckedCreateNestedManyWithoutBookingInputObjectSchema } from './booking_roomUncheckedCreateNestedManyWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUncheckedCreateInput> = z
    .object({
        id: z.string().optional(),
        checkin_date: z.coerce.date(),
        checkout_date: z.coerce.date(),
        num_adults: z.number(),
        num_children: z.number(),
        booking_amount: z.number(),
        guestId: z.string(),
        payment_statusId: z.string().optional().nullable(),
        booking_addon: z
            .lazy(
                () =>
                    booking_addonUncheckedCreateNestedManyWithoutBookingInputObjectSchema
            )
            .optional(),
        booking_room: z
            .lazy(
                () =>
                    booking_roomUncheckedCreateNestedManyWithoutBookingInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const BookingUncheckedCreateInputObjectSchema = Schema
