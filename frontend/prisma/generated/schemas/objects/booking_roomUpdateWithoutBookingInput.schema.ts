import { z } from 'zod'
import { RoomUpdateOneRequiredWithoutBooking_roomNestedInputObjectSchema } from './RoomUpdateOneRequiredWithoutBooking_roomNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUpdateWithoutBookingInput> = z
    .object({
        room: z
            .lazy(
                () =>
                    RoomUpdateOneRequiredWithoutBooking_roomNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const booking_roomUpdateWithoutBookingInputObjectSchema = Schema
