import { z } from 'zod'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomCreateWithoutFloorInputObjectSchema } from './RoomCreateWithoutFloorInput.schema'
import { RoomUncheckedCreateWithoutFloorInputObjectSchema } from './RoomUncheckedCreateWithoutFloorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateOrConnectWithoutFloorInput> = z
    .object({
        where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => RoomCreateWithoutFloorInputObjectSchema),
            z.lazy(() => RoomUncheckedCreateWithoutFloorInputObjectSchema),
        ]),
    })
    .strict()

export const RoomCreateOrConnectWithoutFloorInputObjectSchema = Schema
