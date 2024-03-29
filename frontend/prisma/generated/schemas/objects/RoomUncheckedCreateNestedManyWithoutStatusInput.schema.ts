import { z } from 'zod'
import { RoomCreateWithoutStatusInputObjectSchema } from './RoomCreateWithoutStatusInput.schema'
import { RoomUncheckedCreateWithoutStatusInputObjectSchema } from './RoomUncheckedCreateWithoutStatusInput.schema'
import { RoomCreateOrConnectWithoutStatusInputObjectSchema } from './RoomCreateOrConnectWithoutStatusInput.schema'
import { RoomCreateManyStatusInputEnvelopeObjectSchema } from './RoomCreateManyStatusInputEnvelope.schema'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUncheckedCreateNestedManyWithoutStatusInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => RoomCreateWithoutStatusInputObjectSchema),
                    z
                        .lazy(() => RoomCreateWithoutStatusInputObjectSchema)
                        .array(),
                    z.lazy(
                        () => RoomUncheckedCreateWithoutStatusInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomUncheckedCreateWithoutStatusInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () => RoomCreateOrConnectWithoutStatusInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                RoomCreateOrConnectWithoutStatusInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(() => RoomCreateManyStatusInputEnvelopeObjectSchema)
                .optional(),
            connect: z
                .union([
                    z.lazy(() => RoomWhereUniqueInputObjectSchema),
                    z.lazy(() => RoomWhereUniqueInputObjectSchema).array(),
                ])
                .optional(),
        })
        .strict()

export const RoomUncheckedCreateNestedManyWithoutStatusInputObjectSchema =
    Schema
