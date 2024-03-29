import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { RoomUncheckedUpdateManyWithoutRoom_classNestedInputObjectSchema } from './RoomUncheckedUpdateManyWithoutRoom_classNestedInput.schema'
import { room_class_bed_typeUncheckedUpdateManyWithoutRoom_classNestedInputObjectSchema } from './room_class_bed_typeUncheckedUpdateManyWithoutRoom_classNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classUncheckedUpdateWithoutRoomclass_featureInput> =
    z
        .object({
            id: z
                .union([
                    z.string(),
                    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            class_name: z
                .union([
                    z.string(),
                    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            base_price: z
                .union([
                    z.number(),
                    z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            Room: z
                .lazy(
                    () =>
                        RoomUncheckedUpdateManyWithoutRoom_classNestedInputObjectSchema
                )
                .optional(),
            room_class_bed_type: z
                .lazy(
                    () =>
                        room_class_bed_typeUncheckedUpdateManyWithoutRoom_classNestedInputObjectSchema
                )
                .optional(),
        })
        .strict()

export const Room_classUncheckedUpdateWithoutRoomclass_featureInputObjectSchema =
    Schema
