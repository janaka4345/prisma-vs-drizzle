import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { RoomUncheckedUpdateManyWithoutFloorNestedInputObjectSchema } from './RoomUncheckedUpdateManyWithoutFloorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorUncheckedUpdateInput> = z
    .object({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        floor_number: z
            .union([
                z.number(),
                z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        Room: z
            .lazy(
                () => RoomUncheckedUpdateManyWithoutFloorNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const FloorUncheckedUpdateInputObjectSchema = Schema
