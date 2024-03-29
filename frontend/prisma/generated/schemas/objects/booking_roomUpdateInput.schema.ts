import { z } from 'zod'
import { RoomUpdateOneRequiredWithoutBooking_roomNestedInputObjectSchema } from './RoomUpdateOneRequiredWithoutBooking_roomNestedInput.schema'
import { BookingUpdateOneRequiredWithoutBooking_roomNestedInputObjectSchema } from './BookingUpdateOneRequiredWithoutBooking_roomNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUpdateInput> = z
    .object({
        room: z
            .lazy(
                () =>
                    RoomUpdateOneRequiredWithoutBooking_roomNestedInputObjectSchema
            )
            .optional(),
        booking: z
            .lazy(
                () =>
                    BookingUpdateOneRequiredWithoutBooking_roomNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const booking_roomUpdateInputObjectSchema = Schema
