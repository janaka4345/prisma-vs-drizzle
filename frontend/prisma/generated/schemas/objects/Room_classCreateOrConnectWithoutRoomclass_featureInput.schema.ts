import { z } from 'zod'
import { Room_classWhereUniqueInputObjectSchema } from './Room_classWhereUniqueInput.schema'
import { Room_classCreateWithoutRoomclass_featureInputObjectSchema } from './Room_classCreateWithoutRoomclass_featureInput.schema'
import { Room_classUncheckedCreateWithoutRoomclass_featureInputObjectSchema } from './Room_classUncheckedCreateWithoutRoomclass_featureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classCreateOrConnectWithoutRoomclass_featureInput> =
    z
        .object({
            where: z.lazy(() => Room_classWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(
                    () =>
                        Room_classCreateWithoutRoomclass_featureInputObjectSchema
                ),
                z.lazy(
                    () =>
                        Room_classUncheckedCreateWithoutRoomclass_featureInputObjectSchema
                ),
            ]),
        })
        .strict()

export const Room_classCreateOrConnectWithoutRoomclass_featureInputObjectSchema =
    Schema
