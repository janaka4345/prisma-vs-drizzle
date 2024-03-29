import { z } from 'zod'
import { FloorCreateNestedOneWithoutRoomInputObjectSchema } from './FloorCreateNestedOneWithoutRoomInput.schema'
import { Room_classCreateNestedOneWithoutRoomInputObjectSchema } from './Room_classCreateNestedOneWithoutRoomInput.schema'
import { Room_statusCreateNestedOneWithoutRoomInputObjectSchema } from './Room_statusCreateNestedOneWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateWithoutBooking_roomInput> = z
    .object({
        id: z.string().optional(),
        room_number: z.number(),
        floor: z.lazy(() => FloorCreateNestedOneWithoutRoomInputObjectSchema),
        room_class: z.lazy(
            () => Room_classCreateNestedOneWithoutRoomInputObjectSchema
        ),
        status: z.lazy(
            () => Room_statusCreateNestedOneWithoutRoomInputObjectSchema
        ),
    })
    .strict()

export const RoomCreateWithoutBooking_roomInputObjectSchema = Schema
