import { z } from 'zod'
import { RoomWhereInputObjectSchema } from './RoomWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomListRelationFilter> = z
    .object({
        every: z.lazy(() => RoomWhereInputObjectSchema).optional(),
        some: z.lazy(() => RoomWhereInputObjectSchema).optional(),
        none: z.lazy(() => RoomWhereInputObjectSchema).optional(),
    })
    .strict()

export const RoomListRelationFilterObjectSchema = Schema
