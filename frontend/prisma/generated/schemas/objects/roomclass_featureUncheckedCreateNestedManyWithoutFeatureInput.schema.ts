import { z } from 'zod'
import { roomclass_featureCreateWithoutFeatureInputObjectSchema } from './roomclass_featureCreateWithoutFeatureInput.schema'
import { roomclass_featureUncheckedCreateWithoutFeatureInputObjectSchema } from './roomclass_featureUncheckedCreateWithoutFeatureInput.schema'
import { roomclass_featureCreateOrConnectWithoutFeatureInputObjectSchema } from './roomclass_featureCreateOrConnectWithoutFeatureInput.schema'
import { roomclass_featureCreateManyFeatureInputEnvelopeObjectSchema } from './roomclass_featureCreateManyFeatureInputEnvelope.schema'
import { roomclass_featureWhereUniqueInputObjectSchema } from './roomclass_featureWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUncheckedCreateNestedManyWithoutFeatureInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureCreateWithoutFeatureInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureCreateWithoutFeatureInputObjectSchema
                        )
                        .array(),
                    z.lazy(
                        () =>
                            roomclass_featureUncheckedCreateWithoutFeatureInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureUncheckedCreateWithoutFeatureInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureCreateOrConnectWithoutFeatureInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureCreateOrConnectWithoutFeatureInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () =>
                        roomclass_featureCreateManyFeatureInputEnvelopeObjectSchema
                )
                .optional(),
            connect: z
                .union([
                    z.lazy(() => roomclass_featureWhereUniqueInputObjectSchema),
                    z
                        .lazy(
                            () => roomclass_featureWhereUniqueInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
        })
        .strict()

export const roomclass_featureUncheckedCreateNestedManyWithoutFeatureInputObjectSchema =
    Schema
