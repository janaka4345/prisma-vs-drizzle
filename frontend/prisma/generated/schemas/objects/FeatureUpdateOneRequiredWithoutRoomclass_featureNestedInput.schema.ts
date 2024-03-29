import { z } from 'zod'
import { FeatureCreateWithoutRoomclass_featureInputObjectSchema } from './FeatureCreateWithoutRoomclass_featureInput.schema'
import { FeatureUncheckedCreateWithoutRoomclass_featureInputObjectSchema } from './FeatureUncheckedCreateWithoutRoomclass_featureInput.schema'
import { FeatureCreateOrConnectWithoutRoomclass_featureInputObjectSchema } from './FeatureCreateOrConnectWithoutRoomclass_featureInput.schema'
import { FeatureUpsertWithoutRoomclass_featureInputObjectSchema } from './FeatureUpsertWithoutRoomclass_featureInput.schema'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'
import { FeatureUpdateWithoutRoomclass_featureInputObjectSchema } from './FeatureUpdateWithoutRoomclass_featureInput.schema'
import { FeatureUncheckedUpdateWithoutRoomclass_featureInputObjectSchema } from './FeatureUncheckedUpdateWithoutRoomclass_featureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureUpdateOneRequiredWithoutRoomclass_featureNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () =>
                            FeatureCreateWithoutRoomclass_featureInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            FeatureUncheckedCreateWithoutRoomclass_featureInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        FeatureCreateOrConnectWithoutRoomclass_featureInputObjectSchema
                )
                .optional(),
            upsert: z
                .lazy(
                    () => FeatureUpsertWithoutRoomclass_featureInputObjectSchema
                )
                .optional(),
            connect: z
                .lazy(() => FeatureWhereUniqueInputObjectSchema)
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            FeatureUpdateWithoutRoomclass_featureInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            FeatureUncheckedUpdateWithoutRoomclass_featureInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const FeatureUpdateOneRequiredWithoutRoomclass_featureNestedInputObjectSchema =
    Schema
