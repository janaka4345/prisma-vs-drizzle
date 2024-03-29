import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUncheckedCreateWithoutFeatureInput> =
    z
        .object({
            room_classId: z.string(),
        })
        .strict()

export const roomclass_featureUncheckedCreateWithoutFeatureInputObjectSchema =
    Schema
