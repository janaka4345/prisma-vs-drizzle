import { z } from 'zod'
import { RoomUpdateWithoutBooking_roomInputObjectSchema } from './RoomUpdateWithoutBooking_roomInput.schema'
import { RoomUncheckedUpdateWithoutBooking_roomInputObjectSchema } from './RoomUncheckedUpdateWithoutBooking_roomInput.schema'
import { RoomCreateWithoutBooking_roomInputObjectSchema } from './RoomCreateWithoutBooking_roomInput.schema'
import { RoomUncheckedCreateWithoutBooking_roomInputObjectSchema } from './RoomUncheckedCreateWithoutBooking_roomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpsertWithoutBooking_roomInput> = z
    .object({
        update: z.union([
            z.lazy(() => RoomUpdateWithoutBooking_roomInputObjectSchema),
            z.lazy(
                () => RoomUncheckedUpdateWithoutBooking_roomInputObjectSchema
            ),
        ]),
        create: z.union([
            z.lazy(() => RoomCreateWithoutBooking_roomInputObjectSchema),
            z.lazy(
                () => RoomUncheckedCreateWithoutBooking_roomInputObjectSchema
            ),
        ]),
    })
    .strict()

export const RoomUpsertWithoutBooking_roomInputObjectSchema = Schema
