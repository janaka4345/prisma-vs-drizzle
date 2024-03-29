import { z } from 'zod'
import { RoomCreateWithoutBooking_roomInputObjectSchema } from './RoomCreateWithoutBooking_roomInput.schema'
import { RoomUncheckedCreateWithoutBooking_roomInputObjectSchema } from './RoomUncheckedCreateWithoutBooking_roomInput.schema'
import { RoomCreateOrConnectWithoutBooking_roomInputObjectSchema } from './RoomCreateOrConnectWithoutBooking_roomInput.schema'
import { RoomUpsertWithoutBooking_roomInputObjectSchema } from './RoomUpsertWithoutBooking_roomInput.schema'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomUpdateWithoutBooking_roomInputObjectSchema } from './RoomUpdateWithoutBooking_roomInput.schema'
import { RoomUncheckedUpdateWithoutBooking_roomInputObjectSchema } from './RoomUncheckedUpdateWithoutBooking_roomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpdateOneRequiredWithoutBooking_roomNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => RoomCreateWithoutBooking_roomInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            RoomUncheckedCreateWithoutBooking_roomInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        RoomCreateOrConnectWithoutBooking_roomInputObjectSchema
                )
                .optional(),
            upsert: z
                .lazy(() => RoomUpsertWithoutBooking_roomInputObjectSchema)
                .optional(),
            connect: z.lazy(() => RoomWhereUniqueInputObjectSchema).optional(),
            update: z
                .union([
                    z.lazy(
                        () => RoomUpdateWithoutBooking_roomInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            RoomUncheckedUpdateWithoutBooking_roomInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const RoomUpdateOneRequiredWithoutBooking_roomNestedInputObjectSchema =
    Schema
