import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { FloorRelationFilterObjectSchema } from './FloorRelationFilter.schema'
import { FloorWhereInputObjectSchema } from './FloorWhereInput.schema'
import { Room_classRelationFilterObjectSchema } from './Room_classRelationFilter.schema'
import { Room_classWhereInputObjectSchema } from './Room_classWhereInput.schema'
import { Room_statusRelationFilterObjectSchema } from './Room_statusRelationFilter.schema'
import { Room_statusWhereInputObjectSchema } from './Room_statusWhereInput.schema'
import { Booking_roomListRelationFilterObjectSchema } from './Booking_roomListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => RoomWhereInputObjectSchema),
                z.lazy(() => RoomWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => RoomWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => RoomWhereInputObjectSchema),
                z.lazy(() => RoomWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        room_number: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        floorId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        room_classId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        statusId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        floor: z
            .union([
                z.lazy(() => FloorRelationFilterObjectSchema),
                z.lazy(() => FloorWhereInputObjectSchema),
            ])
            .optional(),
        room_class: z
            .union([
                z.lazy(() => Room_classRelationFilterObjectSchema),
                z.lazy(() => Room_classWhereInputObjectSchema),
            ])
            .optional(),
        status: z
            .union([
                z.lazy(() => Room_statusRelationFilterObjectSchema),
                z.lazy(() => Room_statusWhereInputObjectSchema),
            ])
            .optional(),
        booking_room: z
            .lazy(() => Booking_roomListRelationFilterObjectSchema)
            .optional(),
    })
    .strict()

export const RoomWhereInputObjectSchema = Schema
