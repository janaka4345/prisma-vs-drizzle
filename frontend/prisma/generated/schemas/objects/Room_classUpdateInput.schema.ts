import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { RoomUpdateManyWithoutRoom_classNestedInputObjectSchema } from './RoomUpdateManyWithoutRoom_classNestedInput.schema'
import { room_class_bed_typeUpdateManyWithoutRoom_classNestedInputObjectSchema } from './room_class_bed_typeUpdateManyWithoutRoom_classNestedInput.schema'
import { roomclass_featureUpdateManyWithoutRoom_classNestedInputObjectSchema } from './roomclass_featureUpdateManyWithoutRoom_classNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classUpdateInput> = z
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
            .lazy(() => RoomUpdateManyWithoutRoom_classNestedInputObjectSchema)
            .optional(),
        room_class_bed_type: z
            .lazy(
                () =>
                    room_class_bed_typeUpdateManyWithoutRoom_classNestedInputObjectSchema
            )
            .optional(),
        roomclass_feature: z
            .lazy(
                () =>
                    roomclass_featureUpdateManyWithoutRoom_classNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Room_classUpdateInputObjectSchema = Schema
