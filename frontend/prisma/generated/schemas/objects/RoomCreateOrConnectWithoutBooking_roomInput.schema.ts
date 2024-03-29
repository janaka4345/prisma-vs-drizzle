import { z } from 'zod'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomCreateWithoutBooking_roomInputObjectSchema } from './RoomCreateWithoutBooking_roomInput.schema'
import { RoomUncheckedCreateWithoutBooking_roomInputObjectSchema } from './RoomUncheckedCreateWithoutBooking_roomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateOrConnectWithoutBooking_roomInput> = z
    .object({
        where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => RoomCreateWithoutBooking_roomInputObjectSchema),
            z.lazy(
                () => RoomUncheckedCreateWithoutBooking_roomInputObjectSchema
            ),
        ]),
    })
    .strict()

export const RoomCreateOrConnectWithoutBooking_roomInputObjectSchema = Schema
