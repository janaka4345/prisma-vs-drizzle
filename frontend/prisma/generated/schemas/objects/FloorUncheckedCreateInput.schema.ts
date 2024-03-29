import { z } from 'zod'
import { RoomUncheckedCreateNestedManyWithoutFloorInputObjectSchema } from './RoomUncheckedCreateNestedManyWithoutFloorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorUncheckedCreateInput> = z
    .object({
        id: z.string().optional(),
        floor_number: z.number(),
        Room: z
            .lazy(
                () => RoomUncheckedCreateNestedManyWithoutFloorInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const FloorUncheckedCreateInputObjectSchema = Schema
