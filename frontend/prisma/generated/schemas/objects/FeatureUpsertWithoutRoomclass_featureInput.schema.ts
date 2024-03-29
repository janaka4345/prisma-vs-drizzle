import { z } from 'zod'
import { FeatureUpdateWithoutRoomclass_featureInputObjectSchema } from './FeatureUpdateWithoutRoomclass_featureInput.schema'
import { FeatureUncheckedUpdateWithoutRoomclass_featureInputObjectSchema } from './FeatureUncheckedUpdateWithoutRoomclass_featureInput.schema'
import { FeatureCreateWithoutRoomclass_featureInputObjectSchema } from './FeatureCreateWithoutRoomclass_featureInput.schema'
import { FeatureUncheckedCreateWithoutRoomclass_featureInputObjectSchema } from './FeatureUncheckedCreateWithoutRoomclass_featureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureUpsertWithoutRoomclass_featureInput> = z
    .object({
        update: z.union([
            z.lazy(
                () => FeatureUpdateWithoutRoomclass_featureInputObjectSchema
            ),
            z.lazy(
                () =>
                    FeatureUncheckedUpdateWithoutRoomclass_featureInputObjectSchema
            ),
        ]),
        create: z.union([
            z.lazy(
                () => FeatureCreateWithoutRoomclass_featureInputObjectSchema
            ),
            z.lazy(
                () =>
                    FeatureUncheckedCreateWithoutRoomclass_featureInputObjectSchema
            ),
        ]),
    })
    .strict()

export const FeatureUpsertWithoutRoomclass_featureInputObjectSchema = Schema
