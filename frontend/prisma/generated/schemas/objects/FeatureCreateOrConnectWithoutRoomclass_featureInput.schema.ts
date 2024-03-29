import { z } from 'zod'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'
import { FeatureCreateWithoutRoomclass_featureInputObjectSchema } from './FeatureCreateWithoutRoomclass_featureInput.schema'
import { FeatureUncheckedCreateWithoutRoomclass_featureInputObjectSchema } from './FeatureUncheckedCreateWithoutRoomclass_featureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateOrConnectWithoutRoomclass_featureInput> =
    z
        .object({
            where: z.lazy(() => FeatureWhereUniqueInputObjectSchema),
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

export const FeatureCreateOrConnectWithoutRoomclass_featureInputObjectSchema =
    Schema
