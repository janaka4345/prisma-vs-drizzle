import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RoomOrderByWithRelationInputObjectSchema } from './RoomOrderByWithRelationInput.schema'
import { BookingOrderByWithRelationInputObjectSchema } from './BookingOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomOrderByWithRelationInput> = z
    .object({
        roomId: z.lazy(() => SortOrderSchema).optional(),
        bookingId: z.lazy(() => SortOrderSchema).optional(),
        room: z.lazy(() => RoomOrderByWithRelationInputObjectSchema).optional(),
        booking: z
            .lazy(() => BookingOrderByWithRelationInputObjectSchema)
            .optional(),
    })
    .strict()

export const booking_roomOrderByWithRelationInputObjectSchema = Schema
