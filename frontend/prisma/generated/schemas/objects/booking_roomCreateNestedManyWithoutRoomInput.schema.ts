import { z } from 'zod'
import { booking_roomCreateWithoutRoomInputObjectSchema } from './booking_roomCreateWithoutRoomInput.schema'
import { booking_roomUncheckedCreateWithoutRoomInputObjectSchema } from './booking_roomUncheckedCreateWithoutRoomInput.schema'
import { booking_roomCreateOrConnectWithoutRoomInputObjectSchema } from './booking_roomCreateOrConnectWithoutRoomInput.schema'
import { booking_roomCreateManyRoomInputEnvelopeObjectSchema } from './booking_roomCreateManyRoomInputEnvelope.schema'
import { booking_roomWhereUniqueInputObjectSchema } from './booking_roomWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomCreateNestedManyWithoutRoomInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => booking_roomCreateWithoutRoomInputObjectSchema),
                z
                    .lazy(() => booking_roomCreateWithoutRoomInputObjectSchema)
                    .array(),
                z.lazy(
                    () =>
                        booking_roomUncheckedCreateWithoutRoomInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            booking_roomUncheckedCreateWithoutRoomInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(
                    () =>
                        booking_roomCreateOrConnectWithoutRoomInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            booking_roomCreateOrConnectWithoutRoomInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => booking_roomCreateManyRoomInputEnvelopeObjectSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
                z.lazy(() => booking_roomWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict()

export const booking_roomCreateNestedManyWithoutRoomInputObjectSchema = Schema
