import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { FloatFilterObjectSchema } from './FloatFilter.schema'
import { RoomListRelationFilterObjectSchema } from './RoomListRelationFilter.schema'
import { Room_class_bed_typeListRelationFilterObjectSchema } from './Room_class_bed_typeListRelationFilter.schema'
import { Roomclass_featureListRelationFilterObjectSchema } from './Roomclass_featureListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => Room_classWhereInputObjectSchema),
                z.lazy(() => Room_classWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => Room_classWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => Room_classWhereInputObjectSchema),
                z.lazy(() => Room_classWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        class_name: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        base_price: z
            .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
            .optional(),
        Room: z.lazy(() => RoomListRelationFilterObjectSchema).optional(),
        room_class_bed_type: z
            .lazy(() => Room_class_bed_typeListRelationFilterObjectSchema)
            .optional(),
        roomclass_feature: z
            .lazy(() => Roomclass_featureListRelationFilterObjectSchema)
            .optional(),
    })
    .strict()

export const Room_classWhereInputObjectSchema = Schema
