import { z } from 'zod'
import { Room_classCreateWithoutRoomclass_featureInputObjectSchema } from './Room_classCreateWithoutRoomclass_featureInput.schema'
import { Room_classUncheckedCreateWithoutRoomclass_featureInputObjectSchema } from './Room_classUncheckedCreateWithoutRoomclass_featureInput.schema'
import { Room_classCreateOrConnectWithoutRoomclass_featureInputObjectSchema } from './Room_classCreateOrConnectWithoutRoomclass_featureInput.schema'
import { Room_classWhereUniqueInputObjectSchema } from './Room_classWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classCreateNestedOneWithoutRoomclass_featureInput> =
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
            connect: z
                .lazy(() => Room_classWhereUniqueInputObjectSchema)
                .optional(),
        })
        .strict()

export const Room_classCreateNestedOneWithoutRoomclass_featureInputObjectSchema =
    Schema
