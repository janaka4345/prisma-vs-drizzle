import { z } from 'zod'
import { roomclass_featureCreateWithoutRoom_classInputObjectSchema } from './roomclass_featureCreateWithoutRoom_classInput.schema'
import { roomclass_featureUncheckedCreateWithoutRoom_classInputObjectSchema } from './roomclass_featureUncheckedCreateWithoutRoom_classInput.schema'
import { roomclass_featureCreateOrConnectWithoutRoom_classInputObjectSchema } from './roomclass_featureCreateOrConnectWithoutRoom_classInput.schema'
import { roomclass_featureCreateManyRoom_classInputEnvelopeObjectSchema } from './roomclass_featureCreateManyRoom_classInputEnvelope.schema'
import { roomclass_featureWhereUniqueInputObjectSchema } from './roomclass_featureWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUncheckedCreateNestedManyWithoutRoom_classInput> =
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
            createMany: z
                .lazy(
                    () =>
                        roomclass_featureCreateManyRoom_classInputEnvelopeObjectSchema
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

export const roomclass_featureUncheckedCreateNestedManyWithoutRoom_classInputObjectSchema =
    Schema
