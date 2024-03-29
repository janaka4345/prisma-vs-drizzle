import { z } from 'zod'
import { RoomCreateWithoutRoom_classInputObjectSchema } from './RoomCreateWithoutRoom_classInput.schema'
import { RoomUncheckedCreateWithoutRoom_classInputObjectSchema } from './RoomUncheckedCreateWithoutRoom_classInput.schema'
import { RoomCreateOrConnectWithoutRoom_classInputObjectSchema } from './RoomCreateOrConnectWithoutRoom_classInput.schema'
import { RoomUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema } from './RoomUpsertWithWhereUniqueWithoutRoom_classInput.schema'
import { RoomCreateManyRoom_classInputEnvelopeObjectSchema } from './RoomCreateManyRoom_classInputEnvelope.schema'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomUpdateWithWhereUniqueWithoutRoom_classInputObjectSchema } from './RoomUpdateWithWhereUniqueWithoutRoom_classInput.schema'
import { RoomUpdateManyWithWhereWithoutRoom_classInputObjectSchema } from './RoomUpdateManyWithWhereWithoutRoom_classInput.schema'
import { RoomScalarWhereInputObjectSchema } from './RoomScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUncheckedUpdateManyWithoutRoom_classNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => RoomCreateWithoutRoom_classInputObjectSchema),
                    z
                        .lazy(
                            () => RoomCreateWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                    z.lazy(
                        () =>
                            RoomUncheckedCreateWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomUncheckedCreateWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            RoomCreateOrConnectWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomCreateOrConnectWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            RoomUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(() => RoomCreateManyRoom_classInputEnvelopeObjectSchema)
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
                            RoomUpdateWithWhereUniqueWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomUpdateWithWhereUniqueWithoutRoom_classInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            RoomUpdateManyWithWhereWithoutRoom_classInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomUpdateManyWithWhereWithoutRoom_classInputObjectSchema
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

export const RoomUncheckedUpdateManyWithoutRoom_classNestedInputObjectSchema =
    Schema
