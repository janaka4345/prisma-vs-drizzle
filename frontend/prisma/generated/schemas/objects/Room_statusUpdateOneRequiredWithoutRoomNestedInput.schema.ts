import { z } from 'zod'
import { Room_statusCreateWithoutRoomInputObjectSchema } from './Room_statusCreateWithoutRoomInput.schema'
import { Room_statusUncheckedCreateWithoutRoomInputObjectSchema } from './Room_statusUncheckedCreateWithoutRoomInput.schema'
import { Room_statusCreateOrConnectWithoutRoomInputObjectSchema } from './Room_statusCreateOrConnectWithoutRoomInput.schema'
import { Room_statusUpsertWithoutRoomInputObjectSchema } from './Room_statusUpsertWithoutRoomInput.schema'
import { Room_statusWhereUniqueInputObjectSchema } from './Room_statusWhereUniqueInput.schema'
import { Room_statusUpdateWithoutRoomInputObjectSchema } from './Room_statusUpdateWithoutRoomInput.schema'
import { Room_statusUncheckedUpdateWithoutRoomInputObjectSchema } from './Room_statusUncheckedUpdateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusUpdateOneRequiredWithoutRoomNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => Room_statusCreateWithoutRoomInputObjectSchema),
                    z.lazy(
                        () =>
                            Room_statusUncheckedCreateWithoutRoomInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () => Room_statusCreateOrConnectWithoutRoomInputObjectSchema
                )
                .optional(),
            upsert: z
                .lazy(() => Room_statusUpsertWithoutRoomInputObjectSchema)
                .optional(),
            connect: z
                .lazy(() => Room_statusWhereUniqueInputObjectSchema)
                .optional(),
            update: z
                .union([
                    z.lazy(() => Room_statusUpdateWithoutRoomInputObjectSchema),
                    z.lazy(
                        () =>
                            Room_statusUncheckedUpdateWithoutRoomInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const Room_statusUpdateOneRequiredWithoutRoomNestedInputObjectSchema =
    Schema
