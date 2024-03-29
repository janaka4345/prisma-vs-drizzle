import { z } from 'zod'
import { Room_classCreateWithoutRoomclass_featureInputObjectSchema } from './Room_classCreateWithoutRoomclass_featureInput.schema'
import { Room_classUncheckedCreateWithoutRoomclass_featureInputObjectSchema } from './Room_classUncheckedCreateWithoutRoomclass_featureInput.schema'
import { Room_classCreateOrConnectWithoutRoomclass_featureInputObjectSchema } from './Room_classCreateOrConnectWithoutRoomclass_featureInput.schema'
import { Room_classUpsertWithoutRoomclass_featureInputObjectSchema } from './Room_classUpsertWithoutRoomclass_featureInput.schema'
import { Room_classWhereUniqueInputObjectSchema } from './Room_classWhereUniqueInput.schema'
import { Room_classUpdateWithoutRoomclass_featureInputObjectSchema } from './Room_classUpdateWithoutRoomclass_featureInput.schema'
import { Room_classUncheckedUpdateWithoutRoomclass_featureInputObjectSchema } from './Room_classUncheckedUpdateWithoutRoomclass_featureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classUpdateOneRequiredWithoutRoomclass_featureNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () =>
                            Room_classCreateWithoutRoomclass_featureInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            Room_classUncheckedCreateWithoutRoomclass_featureInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        Room_classCreateOrConnectWithoutRoomclass_featureInputObjectSchema
                )
                .optional(),
            upsert: z
                .lazy(
                    () =>
                        Room_classUpsertWithoutRoomclass_featureInputObjectSchema
                )
                .optional(),
            connect: z
                .lazy(() => Room_classWhereUniqueInputObjectSchema)
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            Room_classUpdateWithoutRoomclass_featureInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            Room_classUncheckedUpdateWithoutRoomclass_featureInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const Room_classUpdateOneRequiredWithoutRoomclass_featureNestedInputObjectSchema =
    Schema
