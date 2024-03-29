import { z } from 'zod'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomUpdateWithoutFloorInputObjectSchema } from './RoomUpdateWithoutFloorInput.schema'
import { RoomUncheckedUpdateWithoutFloorInputObjectSchema } from './RoomUncheckedUpdateWithoutFloorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutFloorInput> = z
    .object({
        where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => RoomUpdateWithoutFloorInputObjectSchema),
            z.lazy(() => RoomUncheckedUpdateWithoutFloorInputObjectSchema),
        ]),
    })
    .strict()

export const RoomUpdateWithWhereUniqueWithoutFloorInputObjectSchema = Schema
