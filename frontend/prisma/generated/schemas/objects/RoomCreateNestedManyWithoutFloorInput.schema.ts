import { z } from 'zod'
import { RoomCreateWithoutFloorInputObjectSchema } from './RoomCreateWithoutFloorInput.schema'
import { RoomUncheckedCreateWithoutFloorInputObjectSchema } from './RoomUncheckedCreateWithoutFloorInput.schema'
import { RoomCreateOrConnectWithoutFloorInputObjectSchema } from './RoomCreateOrConnectWithoutFloorInput.schema'
import { RoomCreateManyFloorInputEnvelopeObjectSchema } from './RoomCreateManyFloorInputEnvelope.schema'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateNestedManyWithoutFloorInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => RoomCreateWithoutFloorInputObjectSchema),
                z.lazy(() => RoomCreateWithoutFloorInputObjectSchema).array(),
                z.lazy(() => RoomUncheckedCreateWithoutFloorInputObjectSchema),
                z
                    .lazy(
                        () => RoomUncheckedCreateWithoutFloorInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => RoomCreateOrConnectWithoutFloorInputObjectSchema),
                z
                    .lazy(
                        () => RoomCreateOrConnectWithoutFloorInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => RoomCreateManyFloorInputEnvelopeObjectSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => RoomWhereUniqueInputObjectSchema),
                z.lazy(() => RoomWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict()

export const RoomCreateNestedManyWithoutFloorInputObjectSchema = Schema
