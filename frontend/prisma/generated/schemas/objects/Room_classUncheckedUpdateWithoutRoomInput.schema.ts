import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { room_class_bed_typeUncheckedUpdateManyWithoutRoom_classNestedInputObjectSchema } from './room_class_bed_typeUncheckedUpdateManyWithoutRoom_classNestedInput.schema'
import { roomclass_featureUncheckedUpdateManyWithoutRoom_classNestedInputObjectSchema } from './roomclass_featureUncheckedUpdateManyWithoutRoom_classNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classUncheckedUpdateWithoutRoomInput> = z
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
        room_class_bed_type: z
            .lazy(
                () =>
                    room_class_bed_typeUncheckedUpdateManyWithoutRoom_classNestedInputObjectSchema
            )
            .optional(),
        roomclass_feature: z
            .lazy(
                () =>
                    roomclass_featureUncheckedUpdateManyWithoutRoom_classNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Room_classUncheckedUpdateWithoutRoomInputObjectSchema = Schema
