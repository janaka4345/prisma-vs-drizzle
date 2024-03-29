import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { RoomUpdateManyWithoutStatusNestedInputObjectSchema } from './RoomUpdateManyWithoutStatusNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusUpdateInput> = z
    .object({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        status: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        Room: z
            .lazy(() => RoomUpdateManyWithoutStatusNestedInputObjectSchema)
            .optional(),
    })
    .strict()

export const Room_statusUpdateInputObjectSchema = Schema
