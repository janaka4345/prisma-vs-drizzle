import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { FloorUpdateOneRequiredWithoutRoomNestedInputObjectSchema } from './FloorUpdateOneRequiredWithoutRoomNestedInput.schema'
import { Room_statusUpdateOneRequiredWithoutRoomNestedInputObjectSchema } from './Room_statusUpdateOneRequiredWithoutRoomNestedInput.schema'
import { booking_roomUpdateManyWithoutRoomNestedInputObjectSchema } from './booking_roomUpdateManyWithoutRoomNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpdateWithoutRoom_classInput> = z
    .object({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        room_number: z
            .union([
                z.number(),
                z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        floor: z
            .lazy(
                () => FloorUpdateOneRequiredWithoutRoomNestedInputObjectSchema
            )
            .optional(),
        status: z
            .lazy(
                () =>
                    Room_statusUpdateOneRequiredWithoutRoomNestedInputObjectSchema
            )
            .optional(),
        booking_room: z
            .lazy(
                () => booking_roomUpdateManyWithoutRoomNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const RoomUpdateWithoutRoom_classInputObjectSchema = Schema
