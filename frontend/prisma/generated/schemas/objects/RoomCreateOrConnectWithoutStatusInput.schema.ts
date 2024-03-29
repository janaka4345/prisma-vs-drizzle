import { z } from 'zod'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomCreateWithoutStatusInputObjectSchema } from './RoomCreateWithoutStatusInput.schema'
import { RoomUncheckedCreateWithoutStatusInputObjectSchema } from './RoomUncheckedCreateWithoutStatusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomCreateOrConnectWithoutStatusInput> = z
    .object({
        where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => RoomCreateWithoutStatusInputObjectSchema),
            z.lazy(() => RoomUncheckedCreateWithoutStatusInputObjectSchema),
        ]),
    })
    .strict()

export const RoomCreateOrConnectWithoutStatusInputObjectSchema = Schema
