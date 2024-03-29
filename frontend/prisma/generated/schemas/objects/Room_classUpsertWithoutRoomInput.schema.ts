import { z } from 'zod'
import { Room_classUpdateWithoutRoomInputObjectSchema } from './Room_classUpdateWithoutRoomInput.schema'
import { Room_classUncheckedUpdateWithoutRoomInputObjectSchema } from './Room_classUncheckedUpdateWithoutRoomInput.schema'
import { Room_classCreateWithoutRoomInputObjectSchema } from './Room_classCreateWithoutRoomInput.schema'
import { Room_classUncheckedCreateWithoutRoomInputObjectSchema } from './Room_classUncheckedCreateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classUpsertWithoutRoomInput> = z
    .object({
        update: z.union([
            z.lazy(() => Room_classUpdateWithoutRoomInputObjectSchema),
            z.lazy(() => Room_classUncheckedUpdateWithoutRoomInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => Room_classCreateWithoutRoomInputObjectSchema),
            z.lazy(() => Room_classUncheckedCreateWithoutRoomInputObjectSchema),
        ]),
    })
    .strict()

export const Room_classUpsertWithoutRoomInputObjectSchema = Schema
