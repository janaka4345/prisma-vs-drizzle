import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { FloorUpdateOneRequiredWithoutRoomNestedInputObjectSchema } from './FloorUpdateOneRequiredWithoutRoomNestedInput.schema'
import { Room_classUpdateOneRequiredWithoutRoomNestedInputObjectSchema } from './Room_classUpdateOneRequiredWithoutRoomNestedInput.schema'
import { booking_roomUpdateManyWithoutRoomNestedInputObjectSchema } from './booking_roomUpdateManyWithoutRoomNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpdateWithoutStatusInput> = z
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
        room_class: z
            .lazy(
                () =>
                    Room_classUpdateOneRequiredWithoutRoomNestedInputObjectSchema
            )
            .optional(),
        booking_room: z
            .lazy(
                () => booking_roomUpdateManyWithoutRoomNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const RoomUpdateWithoutStatusInputObjectSchema = Schema
