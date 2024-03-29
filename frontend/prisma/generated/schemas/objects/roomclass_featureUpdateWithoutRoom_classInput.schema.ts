import { z } from 'zod'
import { FeatureUpdateOneRequiredWithoutRoomclass_featureNestedInputObjectSchema } from './FeatureUpdateOneRequiredWithoutRoomclass_featureNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUpdateWithoutRoom_classInput> =
    z
        .object({
            feature: z
                .lazy(
                    () =>
                        FeatureUpdateOneRequiredWithoutRoomclass_featureNestedInputObjectSchema
                )
                .optional(),
        })
        .strict()

export const roomclass_featureUpdateWithoutRoom_classInputObjectSchema = Schema
