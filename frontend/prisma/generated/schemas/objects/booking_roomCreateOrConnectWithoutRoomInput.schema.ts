import { z } from 'zod'
import { booking_roomWhereUniqueInputObjectSchema } from './booking_roomWhereUniqueInput.schema'
import { booking_roomCreateWithoutRoomInputObjectSchema } from './booking_roomCreateWithoutRoomInput.schema'
import { booking_roomUncheckedCreateWithoutRoomInputObjectSchema } from './booking_roomUncheckedCreateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomCreateOrConnectWithoutRoomInput> = z
    .object({
        where: z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => booking_roomCreateWithoutRoomInputObjectSchema),
            z.lazy(
                () => booking_roomUncheckedCreateWithoutRoomInputObjectSchema
            ),
        ]),
    })
    .strict()

export const booking_roomCreateOrConnectWithoutRoomInputObjectSchema = Schema
