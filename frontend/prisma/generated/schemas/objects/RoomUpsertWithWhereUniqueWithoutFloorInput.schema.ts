import { z } from 'zod'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomUpdateWithoutFloorInputObjectSchema } from './RoomUpdateWithoutFloorInput.schema'
import { RoomUncheckedUpdateWithoutFloorInputObjectSchema } from './RoomUncheckedUpdateWithoutFloorInput.schema'
import { RoomCreateWithoutFloorInputObjectSchema } from './RoomCreateWithoutFloorInput.schema'
import { RoomUncheckedCreateWithoutFloorInputObjectSchema } from './RoomUncheckedCreateWithoutFloorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutFloorInput> = z
    .object({
        where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => RoomUpdateWithoutFloorInputObjectSchema),
            z.lazy(() => RoomUncheckedUpdateWithoutFloorInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => RoomCreateWithoutFloorInputObjectSchema),
            z.lazy(() => RoomUncheckedCreateWithoutFloorInputObjectSchema),
        ]),
    })
    .strict()

export const RoomUpsertWithWhereUniqueWithoutFloorInputObjectSchema = Schema
