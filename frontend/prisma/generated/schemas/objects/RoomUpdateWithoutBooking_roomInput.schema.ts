import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { FloorUpdateOneRequiredWithoutRoomNestedInputObjectSchema } from './FloorUpdateOneRequiredWithoutRoomNestedInput.schema'
import { Room_classUpdateOneRequiredWithoutRoomNestedInputObjectSchema } from './Room_classUpdateOneRequiredWithoutRoomNestedInput.schema'
import { Room_statusUpdateOneRequiredWithoutRoomNestedInputObjectSchema } from './Room_statusUpdateOneRequiredWithoutRoomNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpdateWithoutBooking_roomInput> = z
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
        status: z
            .lazy(
                () =>
                    Room_statusUpdateOneRequiredWithoutRoomNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const RoomUpdateWithoutBooking_roomInputObjectSchema = Schema
