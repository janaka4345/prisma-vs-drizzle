import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { RoomListRelationFilterObjectSchema } from './RoomListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => Room_statusWhereInputObjectSchema),
                z.lazy(() => Room_statusWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => Room_statusWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => Room_statusWhereInputObjectSchema),
                z.lazy(() => Room_statusWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        status: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        Room: z.lazy(() => RoomListRelationFilterObjectSchema).optional(),
    })
    .strict()

export const Room_statusWhereInputObjectSchema = Schema
