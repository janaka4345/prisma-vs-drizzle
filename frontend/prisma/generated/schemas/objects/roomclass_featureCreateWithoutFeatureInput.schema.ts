import { z } from 'zod'
import { Room_classCreateNestedOneWithoutRoomclass_featureInputObjectSchema } from './Room_classCreateNestedOneWithoutRoomclass_featureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureCreateWithoutFeatureInput> = z
    .object({
        room_class: z.lazy(
            () =>
                Room_classCreateNestedOneWithoutRoomclass_featureInputObjectSchema
        ),
    })
    .strict()

export const roomclass_featureCreateWithoutFeatureInputObjectSchema = Schema
