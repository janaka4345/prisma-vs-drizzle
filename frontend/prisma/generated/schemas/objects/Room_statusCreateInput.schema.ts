import { z } from 'zod'
import { RoomCreateNestedManyWithoutStatusInputObjectSchema } from './RoomCreateNestedManyWithoutStatusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusCreateInput> = z
    .object({
        id: z.string().optional(),
        status: z.string(),
        Room: z
            .lazy(() => RoomCreateNestedManyWithoutStatusInputObjectSchema)
            .optional(),
    })
    .strict()

export const Room_statusCreateInputObjectSchema = Schema
