import { z } from 'zod'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomCreateWithoutRoom_classInputObjectSchema } from './RoomCreateWithoutRoom_classInput.schema'
import { RoomUncheckedCreateWithoutRoom_classInputObjectSchema } from './RoomUncheckedCreateWithoutRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateOrConnectWithoutRoom_classInput> = z
    .object({
        where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => RoomCreateWithoutRoom_classInputObjectSchema),
            z.lazy(() => RoomUncheckedCreateWithoutRoom_classInputObjectSchema),
        ]),
    })
    .strict()

export const RoomCreateOrConnectWithoutRoom_classInputObjectSchema = Schema
