import { z } from 'zod'
import { booking_roomCreateWithoutRoomInputObjectSchema } from './booking_roomCreateWithoutRoomInput.schema'
import { booking_roomUncheckedCreateWithoutRoomInputObjectSchema } from './booking_roomUncheckedCreateWithoutRoomInput.schema'
import { booking_roomCreateOrConnectWithoutRoomInputObjectSchema } from './booking_roomCreateOrConnectWithoutRoomInput.schema'
import { booking_roomUpsertWithWhereUniqueWithoutRoomInputObjectSchema } from './booking_roomUpsertWithWhereUniqueWithoutRoomInput.schema'
import { booking_roomCreateManyRoomInputEnvelopeObjectSchema } from './booking_roomCreateManyRoomInputEnvelope.schema'
import { booking_roomWhereUniqueInputObjectSchema } from './booking_roomWhereUniqueInput.schema'
import { booking_roomUpdateWithWhereUniqueWithoutRoomInputObjectSchema } from './booking_roomUpdateWithWhereUniqueWithoutRoomInput.schema'
import { booking_roomUpdateManyWithWhereWithoutRoomInputObjectSchema } from './booking_roomUpdateManyWithWhereWithoutRoomInput.schema'
import { booking_roomScalarWhereInputObjectSchema } from './booking_roomScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUpdateManyWithoutRoomNestedInput> = z
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
        upsert: z
            .union([
                z.lazy(
                    () =>
                        booking_roomUpsertWithWhereUniqueWithoutRoomInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            booking_roomUpsertWithWhereUniqueWithoutRoomInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => booking_roomCreateManyRoomInputEnvelopeObjectSchema)
            .optional(),
        set: z
            .union([
                z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
                z.lazy(() => booking_roomWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
                z.lazy(() => booking_roomWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
                z.lazy(() => booking_roomWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
                z.lazy(() => booking_roomWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(
                    () =>
                        booking_roomUpdateWithWhereUniqueWithoutRoomInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            booking_roomUpdateWithWhereUniqueWithoutRoomInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () =>
                        booking_roomUpdateManyWithWhereWithoutRoomInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            booking_roomUpdateManyWithWhereWithoutRoomInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => booking_roomScalarWhereInputObjectSchema),
                z.lazy(() => booking_roomScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict()

export const booking_roomUpdateManyWithoutRoomNestedInputObjectSchema = Schema
