import { z } from 'zod'
import { FeatureUpdateOneRequiredWithoutRoomclass_featureNestedInputObjectSchema } from './FeatureUpdateOneRequiredWithoutRoomclass_featureNestedInput.schema'
import { Room_classUpdateOneRequiredWithoutRoomclass_featureNestedInputObjectSchema } from './Room_classUpdateOneRequiredWithoutRoomclass_featureNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUpdateInput> = z
    .object({
        feature: z
            .lazy(
                () =>
                    FeatureUpdateOneRequiredWithoutRoomclass_featureNestedInputObjectSchema
            )
            .optional(),
        room_class: z
            .lazy(
                () =>
                    Room_classUpdateOneRequiredWithoutRoomclass_featureNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const roomclass_featureUpdateInputObjectSchema = Schema
