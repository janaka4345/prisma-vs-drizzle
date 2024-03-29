import { z } from 'zod'
import { Room_statusUpdateWithoutRoomInputObjectSchema } from './Room_statusUpdateWithoutRoomInput.schema'
import { Room_statusUncheckedUpdateWithoutRoomInputObjectSchema } from './Room_statusUncheckedUpdateWithoutRoomInput.schema'
import { Room_statusCreateWithoutRoomInputObjectSchema } from './Room_statusCreateWithoutRoomInput.schema'
import { Room_statusUncheckedCreateWithoutRoomInputObjectSchema } from './Room_statusUncheckedCreateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusUpsertWithoutRoomInput> = z
    .object({
        update: z.union([
            z.lazy(() => Room_statusUpdateWithoutRoomInputObjectSchema),
            z.lazy(
                () => Room_statusUncheckedUpdateWithoutRoomInputObjectSchema
            ),
        ]),
        create: z.union([
            z.lazy(() => Room_statusCreateWithoutRoomInputObjectSchema),
            z.lazy(
                () => Room_statusUncheckedCreateWithoutRoomInputObjectSchema
            ),
        ]),
    })
    .strict()

export const Room_statusUpsertWithoutRoomInputObjectSchema = Schema
