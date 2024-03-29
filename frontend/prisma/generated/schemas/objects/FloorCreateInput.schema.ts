import { z } from 'zod'
import { RoomCreateNestedManyWithoutFloorInputObjectSchema } from './RoomCreateNestedManyWithoutFloorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorCreateInput> = z
    .object({
        id: z.string().optional(),
        floor_number: z.number(),
        Room: z
            .lazy(() => RoomCreateNestedManyWithoutFloorInputObjectSchema)
            .optional(),
    })
    .strict()

export const FloorCreateInputObjectSchema = Schema
