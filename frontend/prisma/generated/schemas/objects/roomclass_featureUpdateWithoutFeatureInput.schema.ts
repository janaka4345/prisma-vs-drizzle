import { z } from 'zod'
import { Room_classUpdateOneRequiredWithoutRoomclass_featureNestedInputObjectSchema } from './Room_classUpdateOneRequiredWithoutRoomclass_featureNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUpdateWithoutFeatureInput> = z
    .object({
        room_class: z
            .lazy(
                () =>
                    Room_classUpdateOneRequiredWithoutRoomclass_featureNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const roomclass_featureUpdateWithoutFeatureInputObjectSchema = Schema
