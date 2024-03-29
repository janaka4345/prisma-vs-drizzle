import { z } from 'zod'
import { RoomCreateWithoutRoom_classInputObjectSchema } from './RoomCreateWithoutRoom_classInput.schema'
import { RoomUncheckedCreateWithoutRoom_classInputObjectSchema } from './RoomUncheckedCreateWithoutRoom_classInput.schema'
import { RoomCreateOrConnectWithoutRoom_classInputObjectSchema } from './RoomCreateOrConnectWithoutRoom_classInput.schema'
import { RoomCreateManyRoom_classInputEnvelopeObjectSchema } from './RoomCreateManyRoom_classInputEnvelope.schema'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateNestedManyWithoutRoom_classInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => RoomCreateWithoutRoom_classInputObjectSchema),
                z
                    .lazy(() => RoomCreateWithoutRoom_classInputObjectSchema)
                    .array(),
                z.lazy(
                    () => RoomUncheckedCreateWithoutRoom_classInputObjectSchema
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
                    () => RoomCreateOrConnectWithoutRoom_classInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            RoomCreateOrConnectWithoutRoom_classInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        createMany: z
            .lazy(() => RoomCreateManyRoom_classInputEnvelopeObjectSchema)
            .optional(),
        connect: z
            .union([
                z.lazy(() => RoomWhereUniqueInputObjectSchema),
                z.lazy(() => RoomWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict()

export const RoomCreateNestedManyWithoutRoom_classInputObjectSchema = Schema
