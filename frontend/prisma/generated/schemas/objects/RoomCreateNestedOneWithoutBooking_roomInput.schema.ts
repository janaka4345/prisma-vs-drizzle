import { z } from 'zod'
import { RoomCreateWithoutBooking_roomInputObjectSchema } from './RoomCreateWithoutBooking_roomInput.schema'
import { RoomUncheckedCreateWithoutBooking_roomInputObjectSchema } from './RoomUncheckedCreateWithoutBooking_roomInput.schema'
import { RoomCreateOrConnectWithoutBooking_roomInputObjectSchema } from './RoomCreateOrConnectWithoutBooking_roomInput.schema'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateNestedOneWithoutBooking_roomInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => RoomCreateWithoutBooking_roomInputObjectSchema),
                z.lazy(
                    () =>
                        RoomUncheckedCreateWithoutBooking_roomInputObjectSchema
                ),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => RoomCreateOrConnectWithoutBooking_roomInputObjectSchema)
            .optional(),
        connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const RoomCreateNestedOneWithoutBooking_roomInputObjectSchema = Schema
