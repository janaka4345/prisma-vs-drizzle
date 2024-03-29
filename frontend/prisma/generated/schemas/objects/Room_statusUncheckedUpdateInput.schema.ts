import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { RoomUncheckedUpdateManyWithoutStatusNestedInputObjectSchema } from './RoomUncheckedUpdateManyWithoutStatusNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusUncheckedUpdateInput> = z
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
            .lazy(
                () =>
                    RoomUncheckedUpdateManyWithoutStatusNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Room_statusUncheckedUpdateInputObjectSchema = Schema
