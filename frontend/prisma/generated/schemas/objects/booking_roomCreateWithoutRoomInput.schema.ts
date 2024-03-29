import { z } from 'zod'
import { BookingCreateNestedOneWithoutBooking_roomInputObjectSchema } from './BookingCreateNestedOneWithoutBooking_roomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomCreateWithoutRoomInput> = z
    .object({
        booking: z.lazy(
            () => BookingCreateNestedOneWithoutBooking_roomInputObjectSchema
        ),
    })
    .strict()

export const booking_roomCreateWithoutRoomInputObjectSchema = Schema
