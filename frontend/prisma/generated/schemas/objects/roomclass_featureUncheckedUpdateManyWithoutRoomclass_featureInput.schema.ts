import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUncheckedUpdateManyWithoutRoomclass_featureInput> =
    z
        .object({
            featureId: z
                .union([
                    z.string(),
                    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
        })
        .strict()

export const roomclass_featureUncheckedUpdateManyWithoutRoomclass_featureInputObjectSchema =
    Schema
