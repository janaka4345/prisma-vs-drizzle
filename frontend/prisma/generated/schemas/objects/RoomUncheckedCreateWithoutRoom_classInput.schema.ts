import { z } from 'zod'
import { booking_roomUncheckedCreateNestedManyWithoutRoomInputObjectSchema } from './booking_roomUncheckedCreateNestedManyWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUncheckedCreateWithoutRoom_classInput> = z
    .object({
        id: z.string().optional(),
        room_number: z.number(),
        floorId: z.string(),
        statusId: z.string(),
        booking_room: z
            .lazy(
                () =>
                    booking_roomUncheckedCreateNestedManyWithoutRoomInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const RoomUncheckedCreateWithoutRoom_classInputObjectSchema = Schema
