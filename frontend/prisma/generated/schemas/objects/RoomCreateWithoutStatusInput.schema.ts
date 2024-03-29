import { z } from 'zod'
import { FloorCreateNestedOneWithoutRoomInputObjectSchema } from './FloorCreateNestedOneWithoutRoomInput.schema'
import { Room_classCreateNestedOneWithoutRoomInputObjectSchema } from './Room_classCreateNestedOneWithoutRoomInput.schema'
import { booking_roomCreateNestedManyWithoutRoomInputObjectSchema } from './booking_roomCreateNestedManyWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateWithoutStatusInput> = z
    .object({
        id: z.string().optional(),
        room_number: z.number(),
        floor: z.lazy(() => FloorCreateNestedOneWithoutRoomInputObjectSchema),
        room_class: z.lazy(
            () => Room_classCreateNestedOneWithoutRoomInputObjectSchema
        ),
        booking_room: z
            .lazy(
                () => booking_roomCreateNestedManyWithoutRoomInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const RoomCreateWithoutStatusInputObjectSchema = Schema
