import { z } from 'zod'
import { Room_classUpdateWithoutRoomclass_featureInputObjectSchema } from './Room_classUpdateWithoutRoomclass_featureInput.schema'
import { Room_classUncheckedUpdateWithoutRoomclass_featureInputObjectSchema } from './Room_classUncheckedUpdateWithoutRoomclass_featureInput.schema'
import { Room_classCreateWithoutRoomclass_featureInputObjectSchema } from './Room_classCreateWithoutRoomclass_featureInput.schema'
import { Room_classUncheckedCreateWithoutRoomclass_featureInputObjectSchema } from './Room_classUncheckedCreateWithoutRoomclass_featureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classUpsertWithoutRoomclass_featureInput> =
    z
        .object({
            update: z.union([
                z.lazy(
                    () =>
                        Room_classUpdateWithoutRoomclass_featureInputObjectSchema
                ),
                z.lazy(
                    () =>
                        Room_classUncheckedUpdateWithoutRoomclass_featureInputObjectSchema
                ),
            ]),
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

export const Room_classUpsertWithoutRoomclass_featureInputObjectSchema = Schema
