import { z } from 'zod'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomUpdateWithoutRoom_classInputObjectSchema } from './RoomUpdateWithoutRoom_classInput.schema'
import { RoomUncheckedUpdateWithoutRoom_classInputObjectSchema } from './RoomUncheckedUpdateWithoutRoom_classInput.schema'
import { RoomCreateWithoutRoom_classInputObjectSchema } from './RoomCreateWithoutRoom_classInput.schema'
import { RoomUncheckedCreateWithoutRoom_classInputObjectSchema } from './RoomUncheckedCreateWithoutRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpsertWithWhereUniqueWithoutRoom_classInput> =
    z
        .object({
            where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(() => RoomUpdateWithoutRoom_classInputObjectSchema),
                z.lazy(
                    () => RoomUncheckedUpdateWithoutRoom_classInputObjectSchema
                ),
            ]),
            create: z.union([
                z.lazy(() => RoomCreateWithoutRoom_classInputObjectSchema),
                z.lazy(
                    () => RoomUncheckedCreateWithoutRoom_classInputObjectSchema
                ),
            ]),
        })
        .strict()

export const RoomUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema =
    Schema
