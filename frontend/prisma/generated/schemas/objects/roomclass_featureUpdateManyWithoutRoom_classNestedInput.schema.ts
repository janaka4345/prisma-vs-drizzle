import { z } from 'zod'
import { roomclass_featureCreateWithoutRoom_classInputObjectSchema } from './roomclass_featureCreateWithoutRoom_classInput.schema'
import { roomclass_featureUncheckedCreateWithoutRoom_classInputObjectSchema } from './roomclass_featureUncheckedCreateWithoutRoom_classInput.schema'
import { roomclass_featureCreateOrConnectWithoutRoom_classInputObjectSchema } from './roomclass_featureCreateOrConnectWithoutRoom_classInput.schema'
import { roomclass_featureUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema } from './roomclass_featureUpsertWithWhereUniqueWithoutRoom_classInput.schema'
import { roomclass_featureCreateManyRoom_classInputEnvelopeObjectSchema } from './roomclass_featureCreateManyRoom_classInputEnvelope.schema'
import { roomclass_featureWhereUniqueInputObjectSchema } from './roomclass_featureWhereUniqueInput.schema'
import { roomclass_featureUpdateWithWhereUniqueWithoutRoom_classInputObjectSchema } from './roomclass_featureUpdateWithWhereUniqueWithoutRoom_classInput.schema'
import { roomclass_featureUpdateManyWithWhereWithoutRoom_classInputObjectSchema } from './roomclass_featureUpdateManyWithWhereWithoutRoom_classInput.schema'
import { roomclass_featureScalarWhereInputObjectSchema } from './roomclass_featureScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUpdateManyWithoutRoom_classNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureCreateWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureCreateWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                    z.lazy(
                        () =>
                            roomclass_featureUncheckedCreateWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureUncheckedCreateWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureCreateOrConnectWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureCreateOrConnectWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () =>
                        roomclass_featureCreateManyRoom_classInputEnvelopeObjectSchema
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
                            roomclass_featureUpdateWithWhereUniqueWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureUpdateWithWhereUniqueWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureUpdateManyWithWhereWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureUpdateManyWithWhereWithoutRoom_classInputObjectSchema
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

export const roomclass_featureUpdateManyWithoutRoom_classNestedInputObjectSchema =
    Schema
