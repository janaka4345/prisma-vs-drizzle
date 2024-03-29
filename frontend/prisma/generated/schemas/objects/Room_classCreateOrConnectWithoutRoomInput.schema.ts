import { z } from 'zod'
import { Room_classWhereUniqueInputObjectSchema } from './Room_classWhereUniqueInput.schema'
import { Room_classCreateWithoutRoomInputObjectSchema } from './Room_classCreateWithoutRoomInput.schema'
import { Room_classUncheckedCreateWithoutRoomInputObjectSchema } from './Room_classUncheckedCreateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classCreateOrConnectWithoutRoomInput> = z
    .object({
        where: z.lazy(() => Room_classWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => Room_classCreateWithoutRoomInputObjectSchema),
            z.lazy(() => Room_classUncheckedCreateWithoutRoomInputObjectSchema),
        ]),
    })
    .strict()

export const Room_classCreateOrConnectWithoutRoomInputObjectSchema = Schema
