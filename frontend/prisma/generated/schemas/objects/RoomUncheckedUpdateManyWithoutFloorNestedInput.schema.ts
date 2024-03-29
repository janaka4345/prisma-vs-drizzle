import { z } from 'zod'
import { RoomCreateWithoutFloorInputObjectSchema } from './RoomCreateWithoutFloorInput.schema'
import { RoomUncheckedCreateWithoutFloorInputObjectSchema } from './RoomUncheckedCreateWithoutFloorInput.schema'
import { RoomCreateOrConnectWithoutFloorInputObjectSchema } from './RoomCreateOrConnectWithoutFloorInput.schema'
import { RoomUpsertWithWhereUniqueWithoutFloorInputObjectSchema } from './RoomUpsertWithWhereUniqueWithoutFloorInput.schema'
import { RoomCreateManyFloorInputEnvelopeObjectSchema } from './RoomCreateManyFloorInputEnvelope.schema'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomUpdateWithWhereUniqueWithoutFloorInputObjectSchema } from './RoomUpdateWithWhereUniqueWithoutFloorInput.schema'
import { RoomUpdateManyWithWhereWithoutFloorInputObjectSchema } from './RoomUpdateManyWithWhereWithoutFloorInput.schema'
import { RoomScalarWhereInputObjectSchema } from './RoomScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutFloorNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => RoomCreateWithoutFloorInputObjectSchema),
                    z
                        .lazy(() => RoomCreateWithoutFloorInputObjectSchema)
                        .array(),
                    z.lazy(
                        () => RoomUncheckedCreateWithoutFloorInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomUncheckedCreateWithoutFloorInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () => RoomCreateOrConnectWithoutFloorInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomCreateOrConnectWithoutFloorInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            RoomUpsertWithWhereUniqueWithoutFloorInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomUpsertWithWhereUniqueWithoutFloorInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(() => RoomCreateManyFloorInputEnvelopeObjectSchema)
                .optional(),
            set: z
                .union([
                    z.lazy(() => RoomWhereUniqueInputObjectSchema),
                    z.lazy(() => RoomWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => RoomWhereUniqueInputObjectSchema),
                    z.lazy(() => RoomWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => RoomWhereUniqueInputObjectSchema),
                    z.lazy(() => RoomWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => RoomWhereUniqueInputObjectSchema),
                    z.lazy(() => RoomWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            RoomUpdateWithWhereUniqueWithoutFloorInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomUpdateWithWhereUniqueWithoutFloorInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            RoomUpdateManyWithWhereWithoutFloorInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomUpdateManyWithWhereWithoutFloorInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => RoomScalarWhereInputObjectSchema),
                    z.lazy(() => RoomScalarWhereInputObjectSchema).array(),
                ])
                .optional(),
        })
        .strict()

export const RoomUncheckedUpdateManyWithoutFloorNestedInputObjectSchema = Schema
