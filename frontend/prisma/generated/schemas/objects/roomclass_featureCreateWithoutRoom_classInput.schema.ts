import { z } from 'zod'
import { FeatureCreateNestedOneWithoutRoomclass_featureInputObjectSchema } from './FeatureCreateNestedOneWithoutRoomclass_featureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureCreateWithoutRoom_classInput> =
    z
        .object({
            feature: z.lazy(
                () =>
                    FeatureCreateNestedOneWithoutRoomclass_featureInputObjectSchema
            ),
        })
        .strict()

export const roomclass_featureCreateWithoutRoom_classInputObjectSchema = Schema
