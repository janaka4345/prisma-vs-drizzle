import { z } from 'zod'
import { booking_roomRoomIdBookingIdCompoundUniqueInputObjectSchema } from './booking_roomRoomIdBookingIdCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomWhereUniqueInput> = z
    .object({
        roomId_bookingId: z
            .lazy(
                () => booking_roomRoomIdBookingIdCompoundUniqueInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const booking_roomWhereUniqueInputObjectSchema = Schema
