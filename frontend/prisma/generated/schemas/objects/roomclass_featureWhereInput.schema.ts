import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { FeatureRelationFilterObjectSchema } from './FeatureRelationFilter.schema'
import { FeatureWhereInputObjectSchema } from './FeatureWhereInput.schema'
import { Room_classRelationFilterObjectSchema } from './Room_classRelationFilter.schema'
import { Room_classWhereInputObjectSchema } from './Room_classWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => roomclass_featureWhereInputObjectSchema),
                z.lazy(() => roomclass_featureWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => roomclass_featureWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => roomclass_featureWhereInputObjectSchema),
                z.lazy(() => roomclass_featureWhereInputObjectSchema).array(),
            ])
            .optional(),
        featureId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        room_classId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        feature: z
            .union([
                z.lazy(() => FeatureRelationFilterObjectSchema),
                z.lazy(() => FeatureWhereInputObjectSchema),
            ])
            .optional(),
        room_class: z
            .union([
                z.lazy(() => Room_classRelationFilterObjectSchema),
                z.lazy(() => Room_classWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict()

export const roomclass_featureWhereInputObjectSchema = Schema
