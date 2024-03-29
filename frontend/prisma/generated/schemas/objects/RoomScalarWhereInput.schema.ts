import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => RoomScalarWhereInputObjectSchema),
                z.lazy(() => RoomScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => RoomScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => RoomScalarWhereInputObjectSchema),
                z.lazy(() => RoomScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        room_number: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        floorId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        room_classId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        statusId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
    })
    .strict()

export const RoomScalarWhereInputObjectSchema = Schema
