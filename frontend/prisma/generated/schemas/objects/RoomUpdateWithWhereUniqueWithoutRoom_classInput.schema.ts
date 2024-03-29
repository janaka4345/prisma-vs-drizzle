import { z } from 'zod'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomUpdateWithoutRoom_classInputObjectSchema } from './RoomUpdateWithoutRoom_classInput.schema'
import { RoomUncheckedUpdateWithoutRoom_classInputObjectSchema } from './RoomUncheckedUpdateWithoutRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutRoom_classInput> =
    z
        .object({
            where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(() => RoomUpdateWithoutRoom_classInputObjectSchema),
                z.lazy(
                    () => RoomUncheckedUpdateWithoutRoom_classInputObjectSchema
                ),
            ]),
        })
        .strict()

export const RoomUpdateWithWhereUniqueWithoutRoom_classInputObjectSchema =
    Schema
