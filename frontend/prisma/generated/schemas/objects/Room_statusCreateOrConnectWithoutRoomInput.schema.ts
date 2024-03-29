import { z } from 'zod'
import { Room_statusWhereUniqueInputObjectSchema } from './Room_statusWhereUniqueInput.schema'
import { Room_statusCreateWithoutRoomInputObjectSchema } from './Room_statusCreateWithoutRoomInput.schema'
import { Room_statusUncheckedCreateWithoutRoomInputObjectSchema } from './Room_statusUncheckedCreateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusCreateOrConnectWithoutRoomInput> = z
    .object({
        where: z.lazy(() => Room_statusWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => Room_statusCreateWithoutRoomInputObjectSchema),
            z.lazy(
                () => Room_statusUncheckedCreateWithoutRoomInputObjectSchema
            ),
        ]),
    })
    .strict()

export const Room_statusCreateOrConnectWithoutRoomInputObjectSchema = Schema
