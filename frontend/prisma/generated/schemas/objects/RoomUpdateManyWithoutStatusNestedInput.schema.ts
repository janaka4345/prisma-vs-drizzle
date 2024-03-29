import { z } from 'zod'
import { RoomCreateWithoutStatusInputObjectSchema } from './RoomCreateWithoutStatusInput.schema'
import { RoomUncheckedCreateWithoutStatusInputObjectSchema } from './RoomUncheckedCreateWithoutStatusInput.schema'
import { RoomCreateOrConnectWithoutStatusInputObjectSchema } from './RoomCreateOrConnectWithoutStatusInput.schema'
import { RoomUpsertWithWhereUniqueWithoutStatusInputObjectSchema } from './RoomUpsertWithWhereUniqueWithoutStatusInput.schema'
import { RoomCreateManyStatusInputEnvelopeObjectSchema } from './RoomCreateManyStatusInputEnvelope.schema'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomUpdateWithWhereUniqueWithoutStatusInputObjectSchema } from './RoomUpdateWithWhereUniqueWithoutStatusInput.schema'
import { RoomUpdateManyWithWhereWithoutStatusInputObjectSchema } from './RoomUpdateManyWithWhereWithoutStatusInput.schema'
import { RoomScalarWhereInputObjectSchema } from './RoomScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpdateManyWithoutStatusNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => RoomCreateWithoutStatusInputObjectSchema),
                z.lazy(() => RoomCreateWithoutStatusInputObjectSchema).array(),
                z.lazy(() => RoomUncheckedCreateWithoutStatusInputObjectSchema),
                z
                    .lazy(
                        () => RoomUncheckedCreateWithoutStatusInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => RoomCreateOrConnectWithoutStatusInputObjectSchema),
                z
                    .lazy(
                        () => RoomCreateOrConnectWithoutStatusInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(
                    () =>
                        RoomUpsertWithWhereUniqueWithoutStatusInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            RoomUpsertWithWhereUniqueWithoutStatusInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => RoomCreateManyStatusInputEnvelopeObjectSchema)
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
                        RoomUpdateWithWhereUniqueWithoutStatusInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            RoomUpdateWithWhereUniqueWithoutStatusInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(
                    () => RoomUpdateManyWithWhereWithoutStatusInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            RoomUpdateManyWithWhereWithoutStatusInputObjectSchema
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

export const RoomUpdateManyWithoutStatusNestedInputObjectSchema = Schema
