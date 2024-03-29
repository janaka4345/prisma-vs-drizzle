import { z } from 'zod'
import { FloorCreateWithoutRoomInputObjectSchema } from './FloorCreateWithoutRoomInput.schema'
import { FloorUncheckedCreateWithoutRoomInputObjectSchema } from './FloorUncheckedCreateWithoutRoomInput.schema'
import { FloorCreateOrConnectWithoutRoomInputObjectSchema } from './FloorCreateOrConnectWithoutRoomInput.schema'
import { FloorWhereUniqueInputObjectSchema } from './FloorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorCreateNestedOneWithoutRoomInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => FloorCreateWithoutRoomInputObjectSchema),
                z.lazy(() => FloorUncheckedCreateWithoutRoomInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => FloorCreateOrConnectWithoutRoomInputObjectSchema)
            .optional(),
        connect: z.lazy(() => FloorWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const FloorCreateNestedOneWithoutRoomInputObjectSchema = Schema
