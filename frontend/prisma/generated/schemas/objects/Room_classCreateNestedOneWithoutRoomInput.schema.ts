import { z } from 'zod'
import { Room_classCreateWithoutRoomInputObjectSchema } from './Room_classCreateWithoutRoomInput.schema'
import { Room_classUncheckedCreateWithoutRoomInputObjectSchema } from './Room_classUncheckedCreateWithoutRoomInput.schema'
import { Room_classCreateOrConnectWithoutRoomInputObjectSchema } from './Room_classCreateOrConnectWithoutRoomInput.schema'
import { Room_classWhereUniqueInputObjectSchema } from './Room_classWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classCreateNestedOneWithoutRoomInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => Room_classCreateWithoutRoomInputObjectSchema),
                z.lazy(
                    () => Room_classUncheckedCreateWithoutRoomInputObjectSchema
                ),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => Room_classCreateOrConnectWithoutRoomInputObjectSchema)
            .optional(),
        connect: z
            .lazy(() => Room_classWhereUniqueInputObjectSchema)
            .optional(),
    })
    .strict()

export const Room_classCreateNestedOneWithoutRoomInputObjectSchema = Schema
