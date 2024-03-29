import { z } from 'zod'
import { BookingUpdateOneRequiredWithoutBooking_roomNestedInputObjectSchema } from './BookingUpdateOneRequiredWithoutBooking_roomNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUpdateWithoutRoomInput> = z
    .object({
        booking: z
            .lazy(
                () =>
                    BookingUpdateOneRequiredWithoutBooking_roomNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const booking_roomUpdateWithoutRoomInputObjectSchema = Schema
