import { z } from 'zod'
import { FeatureCreateWithoutRoomclass_featureInputObjectSchema } from './FeatureCreateWithoutRoomclass_featureInput.schema'
import { FeatureUncheckedCreateWithoutRoomclass_featureInputObjectSchema } from './FeatureUncheckedCreateWithoutRoomclass_featureInput.schema'
import { FeatureCreateOrConnectWithoutRoomclass_featureInputObjectSchema } from './FeatureCreateOrConnectWithoutRoomclass_featureInput.schema'
import { FeatureWhereUniqueInputObjectSchema } from './FeatureWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureCreateNestedOneWithoutRoomclass_featureInput> =
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
            connect: z
                .lazy(() => FeatureWhereUniqueInputObjectSchema)
                .optional(),
        })
        .strict()

export const FeatureCreateNestedOneWithoutRoomclass_featureInputObjectSchema =
    Schema
