import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { RoomUpdateManyWithoutFloorNestedInputObjectSchema } from './RoomUpdateManyWithoutFloorNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorUpdateInput> = z
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
            .lazy(() => RoomUpdateManyWithoutFloorNestedInputObjectSchema)
            .optional(),
    })
    .strict()

export const FloorUpdateInputObjectSchema = Schema
