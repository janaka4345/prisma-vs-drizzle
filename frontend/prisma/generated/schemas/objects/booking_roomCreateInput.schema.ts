import { z } from 'zod'
import { RoomCreateNestedOneWithoutBooking_roomInputObjectSchema } from './RoomCreateNestedOneWithoutBooking_roomInput.schema'
import { BookingCreateNestedOneWithoutBooking_roomInputObjectSchema } from './BookingCreateNestedOneWithoutBooking_roomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomCreateInput> = z
    .object({
        room: z.lazy(
            () => RoomCreateNestedOneWithoutBooking_roomInputObjectSchema
        ),
        booking: z.lazy(
            () => BookingCreateNestedOneWithoutBooking_roomInputObjectSchema
        ),
    })
    .strict()

export const booking_roomCreateInputObjectSchema = Schema
