import { z } from 'zod'
import { booking_roomWhereUniqueInputObjectSchema } from './booking_roomWhereUniqueInput.schema'
import { booking_roomUpdateWithoutRoomInputObjectSchema } from './booking_roomUpdateWithoutRoomInput.schema'
import { booking_roomUncheckedUpdateWithoutRoomInputObjectSchema } from './booking_roomUncheckedUpdateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUpdateWithWhereUniqueWithoutRoomInput> =
    z
        .object({
            where: z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(() => booking_roomUpdateWithoutRoomInputObjectSchema),
                z.lazy(
                    () =>
                        booking_roomUncheckedUpdateWithoutRoomInputObjectSchema
                ),
            ]),
        })
        .strict()

export const booking_roomUpdateWithWhereUniqueWithoutRoomInputObjectSchema =
    Schema
