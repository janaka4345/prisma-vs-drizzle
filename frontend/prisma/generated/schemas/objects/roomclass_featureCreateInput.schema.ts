import { z } from 'zod'
import { FeatureCreateNestedOneWithoutRoomclass_featureInputObjectSchema } from './FeatureCreateNestedOneWithoutRoomclass_featureInput.schema'
import { Room_classCreateNestedOneWithoutRoomclass_featureInputObjectSchema } from './Room_classCreateNestedOneWithoutRoomclass_featureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureCreateInput> = z
    .object({
        feature: z.lazy(
            () =>
                FeatureCreateNestedOneWithoutRoomclass_featureInputObjectSchema
        ),
        room_class: z.lazy(
            () =>
                Room_classCreateNestedOneWithoutRoomclass_featureInputObjectSchema
        ),
    })
    .strict()

export const roomclass_featureCreateInputObjectSchema = Schema
