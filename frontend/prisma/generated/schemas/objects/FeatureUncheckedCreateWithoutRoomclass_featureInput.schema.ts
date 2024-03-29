import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureUncheckedCreateWithoutRoomclass_featureInput> =
    z
        .object({
            id: z.string().optional(),
            feature_name: z.string(),
        })
        .strict()

export const FeatureUncheckedCreateWithoutRoomclass_featureInputObjectSchema =
    Schema
