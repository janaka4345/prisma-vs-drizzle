import { z } from 'zod'
import { FloorCreateWithoutRoomInputObjectSchema } from './FloorCreateWithoutRoomInput.schema'
import { FloorUncheckedCreateWithoutRoomInputObjectSchema } from './FloorUncheckedCreateWithoutRoomInput.schema'
import { FloorCreateOrConnectWithoutRoomInputObjectSchema } from './FloorCreateOrConnectWithoutRoomInput.schema'
import { FloorUpsertWithoutRoomInputObjectSchema } from './FloorUpsertWithoutRoomInput.schema'
import { FloorWhereUniqueInputObjectSchema } from './FloorWhereUniqueInput.schema'
import { FloorUpdateWithoutRoomInputObjectSchema } from './FloorUpdateWithoutRoomInput.schema'
import { FloorUncheckedUpdateWithoutRoomInputObjectSchema } from './FloorUncheckedUpdateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorUpdateOneRequiredWithoutRoomNestedInput> = z
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
        upsert: z
            .lazy(() => FloorUpsertWithoutRoomInputObjectSchema)
            .optional(),
        connect: z.lazy(() => FloorWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => FloorUpdateWithoutRoomInputObjectSchema),
                z.lazy(() => FloorUncheckedUpdateWithoutRoomInputObjectSchema),
            ])
            .optional(),
    })
    .strict()

export const FloorUpdateOneRequiredWithoutRoomNestedInputObjectSchema = Schema
