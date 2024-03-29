import { z } from 'zod'
import { Room_classCreateWithoutRoomInputObjectSchema } from './Room_classCreateWithoutRoomInput.schema'
import { Room_classUncheckedCreateWithoutRoomInputObjectSchema } from './Room_classUncheckedCreateWithoutRoomInput.schema'
import { Room_classCreateOrConnectWithoutRoomInputObjectSchema } from './Room_classCreateOrConnectWithoutRoomInput.schema'
import { Room_classUpsertWithoutRoomInputObjectSchema } from './Room_classUpsertWithoutRoomInput.schema'
import { Room_classWhereUniqueInputObjectSchema } from './Room_classWhereUniqueInput.schema'
import { Room_classUpdateWithoutRoomInputObjectSchema } from './Room_classUpdateWithoutRoomInput.schema'
import { Room_classUncheckedUpdateWithoutRoomInputObjectSchema } from './Room_classUncheckedUpdateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classUpdateOneRequiredWithoutRoomNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => Room_classCreateWithoutRoomInputObjectSchema),
                    z.lazy(
                        () =>
                            Room_classUncheckedCreateWithoutRoomInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () => Room_classCreateOrConnectWithoutRoomInputObjectSchema
                )
                .optional(),
            upsert: z
                .lazy(() => Room_classUpsertWithoutRoomInputObjectSchema)
                .optional(),
            connect: z
                .lazy(() => Room_classWhereUniqueInputObjectSchema)
                .optional(),
            update: z
                .union([
                    z.lazy(() => Room_classUpdateWithoutRoomInputObjectSchema),
                    z.lazy(
                        () =>
                            Room_classUncheckedUpdateWithoutRoomInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const Room_classUpdateOneRequiredWithoutRoomNestedInputObjectSchema =
    Schema
