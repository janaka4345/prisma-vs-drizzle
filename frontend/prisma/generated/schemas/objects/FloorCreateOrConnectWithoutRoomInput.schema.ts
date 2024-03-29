import { z } from 'zod'
import { FloorWhereUniqueInputObjectSchema } from './FloorWhereUniqueInput.schema'
import { FloorCreateWithoutRoomInputObjectSchema } from './FloorCreateWithoutRoomInput.schema'
import { FloorUncheckedCreateWithoutRoomInputObjectSchema } from './FloorUncheckedCreateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorCreateOrConnectWithoutRoomInput> = z
    .object({
        where: z.lazy(() => FloorWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => FloorCreateWithoutRoomInputObjectSchema),
            z.lazy(() => FloorUncheckedCreateWithoutRoomInputObjectSchema),
        ]),
    })
    .strict()

export const FloorCreateOrConnectWithoutRoomInputObjectSchema = Schema
