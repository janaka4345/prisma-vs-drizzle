import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { RoomListRelationFilterObjectSchema } from './RoomListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => FloorWhereInputObjectSchema),
                z.lazy(() => FloorWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => FloorWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => FloorWhereInputObjectSchema),
                z.lazy(() => FloorWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        floor_number: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        Room: z.lazy(() => RoomListRelationFilterObjectSchema).optional(),
    })
    .strict()

export const FloorWhereInputObjectSchema = Schema
