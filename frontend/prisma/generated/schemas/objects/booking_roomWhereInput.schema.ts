import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { RoomRelationFilterObjectSchema } from './RoomRelationFilter.schema'
import { RoomWhereInputObjectSchema } from './RoomWhereInput.schema'
import { BookingRelationFilterObjectSchema } from './BookingRelationFilter.schema'
import { BookingWhereInputObjectSchema } from './BookingWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => booking_roomWhereInputObjectSchema),
                z.lazy(() => booking_roomWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => booking_roomWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => booking_roomWhereInputObjectSchema),
                z.lazy(() => booking_roomWhereInputObjectSchema).array(),
            ])
            .optional(),
        roomId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        bookingId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        room: z
            .union([
                z.lazy(() => RoomRelationFilterObjectSchema),
                z.lazy(() => RoomWhereInputObjectSchema),
            ])
            .optional(),
        booking: z
            .union([
                z.lazy(() => BookingRelationFilterObjectSchema),
                z.lazy(() => BookingWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict()

export const booking_roomWhereInputObjectSchema = Schema
