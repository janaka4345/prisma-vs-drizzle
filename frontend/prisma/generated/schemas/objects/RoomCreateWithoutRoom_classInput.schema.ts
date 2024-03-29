import { z } from 'zod'
import { FloorCreateNestedOneWithoutRoomInputObjectSchema } from './FloorCreateNestedOneWithoutRoomInput.schema'
import { Room_statusCreateNestedOneWithoutRoomInputObjectSchema } from './Room_statusCreateNestedOneWithoutRoomInput.schema'
import { booking_roomCreateNestedManyWithoutRoomInputObjectSchema } from './booking_roomCreateNestedManyWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateWithoutRoom_classInput> = z
    .object({
        id: z.string().optional(),
        room_number: z.number(),
        floor: z.lazy(() => FloorCreateNestedOneWithoutRoomInputObjectSchema),
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

export const RoomCreateWithoutRoom_classInputObjectSchema = Schema
