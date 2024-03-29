import { z } from 'zod'
import { Room_statusCreateWithoutRoomInputObjectSchema } from './Room_statusCreateWithoutRoomInput.schema'
import { Room_statusUncheckedCreateWithoutRoomInputObjectSchema } from './Room_statusUncheckedCreateWithoutRoomInput.schema'
import { Room_statusCreateOrConnectWithoutRoomInputObjectSchema } from './Room_statusCreateOrConnectWithoutRoomInput.schema'
import { Room_statusWhereUniqueInputObjectSchema } from './Room_statusWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusCreateNestedOneWithoutRoomInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => Room_statusCreateWithoutRoomInputObjectSchema),
                z.lazy(
                    () => Room_statusUncheckedCreateWithoutRoomInputObjectSchema
                ),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => Room_statusCreateOrConnectWithoutRoomInputObjectSchema)
            .optional(),
        connect: z
            .lazy(() => Room_statusWhereUniqueInputObjectSchema)
            .optional(),
    })
    .strict()

export const Room_statusCreateNestedOneWithoutRoomInputObjectSchema = Schema
