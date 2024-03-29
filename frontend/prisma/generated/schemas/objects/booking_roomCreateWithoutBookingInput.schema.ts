import { z } from 'zod'
import { RoomCreateNestedOneWithoutBooking_roomInputObjectSchema } from './RoomCreateNestedOneWithoutBooking_roomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomCreateWithoutBookingInput> = z
    .object({
        room: z.lazy(
            () => RoomCreateNestedOneWithoutBooking_roomInputObjectSchema
        ),
    })
    .strict()

export const booking_roomCreateWithoutBookingInputObjectSchema = Schema
