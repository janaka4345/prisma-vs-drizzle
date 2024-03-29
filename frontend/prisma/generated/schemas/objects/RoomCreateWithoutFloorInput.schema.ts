import { z } from 'zod'
import { Room_classCreateNestedOneWithoutRoomInputObjectSchema } from './Room_classCreateNestedOneWithoutRoomInput.schema'
import { Room_statusCreateNestedOneWithoutRoomInputObjectSchema } from './Room_statusCreateNestedOneWithoutRoomInput.schema'
import { booking_roomCreateNestedManyWithoutRoomInputObjectSchema } from './booking_roomCreateNestedManyWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateWithoutFloorInput> = z
    .object({
        id: z.string().optional(),
        room_number: z.number(),
        room_class: z.lazy(
            () => Room_classCreateNestedOneWithoutRoomInputObjectSchema
        ),
        status: z.lazy(
            () => Room_statusCreateNestedOneWithoutRoomInputObjectSchema
        ),
        booking_room: z
            .lazy(
                () => booking_roomCreateNestedManyWithoutRoomInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const RoomCreateWithoutFloorInputObjectSchema = Schema
