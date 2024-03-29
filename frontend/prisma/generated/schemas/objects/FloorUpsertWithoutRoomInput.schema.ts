import { z } from 'zod'
import { FloorUpdateWithoutRoomInputObjectSchema } from './FloorUpdateWithoutRoomInput.schema'
import { FloorUncheckedUpdateWithoutRoomInputObjectSchema } from './FloorUncheckedUpdateWithoutRoomInput.schema'
import { FloorCreateWithoutRoomInputObjectSchema } from './FloorCreateWithoutRoomInput.schema'
import { FloorUncheckedCreateWithoutRoomInputObjectSchema } from './FloorUncheckedCreateWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorUpsertWithoutRoomInput> = z
    .object({
        update: z.union([
            z.lazy(() => FloorUpdateWithoutRoomInputObjectSchema),
            z.lazy(() => FloorUncheckedUpdateWithoutRoomInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => FloorCreateWithoutRoomInputObjectSchema),
            z.lazy(() => FloorUncheckedCreateWithoutRoomInputObjectSchema),
        ]),
    })
    .strict()

export const FloorUpsertWithoutRoomInputObjectSchema = Schema
