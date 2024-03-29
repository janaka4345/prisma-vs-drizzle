import { z } from 'zod'
import { roomclass_featureCreateWithoutFeatureInputObjectSchema } from './roomclass_featureCreateWithoutFeatureInput.schema'
import { roomclass_featureUncheckedCreateWithoutFeatureInputObjectSchema } from './roomclass_featureUncheckedCreateWithoutFeatureInput.schema'
import { roomclass_featureCreateOrConnectWithoutFeatureInputObjectSchema } from './roomclass_featureCreateOrConnectWithoutFeatureInput.schema'
import { roomclass_featureUpsertWithWhereUniqueWithoutFeatureInputObjectSchema } from './roomclass_featureUpsertWithWhereUniqueWithoutFeatureInput.schema'
import { roomclass_featureCreateManyFeatureInputEnvelopeObjectSchema } from './roomclass_featureCreateManyFeatureInputEnvelope.schema'
import { roomclass_featureWhereUniqueInputObjectSchema } from './roomclass_featureWhereUniqueInput.schema'
import { roomclass_featureUpdateWithWhereUniqueWithoutFeatureInputObjectSchema } from './roomclass_featureUpdateWithWhereUniqueWithoutFeatureInput.schema'
import { roomclass_featureUpdateManyWithWhereWithoutFeatureInputObjectSchema } from './roomclass_featureUpdateManyWithWhereWithoutFeatureInput.schema'
import { roomclass_featureScalarWhereInputObjectSchema } from './roomclass_featureScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUncheckedUpdateManyWithoutFeatureNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureUpsertWithWhereUniqueWithoutFeatureInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureUpsertWithWhereUniqueWithoutFeatureInputObjectSchema
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
            set: z
                .union([
                    z.lazy(() => roomclass_featureWhereUniqueInputObjectSchema),
                    z
                        .lazy(
                            () => roomclass_featureWhereUniqueInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => roomclass_featureWhereUniqueInputObjectSchema),
                    z
                        .lazy(
                            () => roomclass_featureWhereUniqueInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => roomclass_featureWhereUniqueInputObjectSchema),
                    z
                        .lazy(
                            () => roomclass_featureWhereUniqueInputObjectSchema
                        )
                        .array(),
                ])
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
            update: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureUpdateWithWhereUniqueWithoutFeatureInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureUpdateWithWhereUniqueWithoutFeatureInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureUpdateManyWithWhereWithoutFeatureInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureUpdateManyWithWhereWithoutFeatureInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => roomclass_featureScalarWhereInputObjectSchema),
                    z
                        .lazy(
                            () => roomclass_featureScalarWhereInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
        })
        .strict()

export const roomclass_featureUncheckedUpdateManyWithoutFeatureNestedInputObjectSchema =
    Schema
