import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureScalarWhereWithAggregatesInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureScalarWhereWithAggregatesInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            OR: z
                .lazy(
                    () =>
                        roomclass_featureScalarWhereWithAggregatesInputObjectSchema
                )
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(
                        () =>
                            roomclass_featureScalarWhereWithAggregatesInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                roomclass_featureScalarWhereWithAggregatesInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            featureId: z
                .union([
                    z.lazy(() => StringWithAggregatesFilterObjectSchema),
                    z.string(),
                ])
                .optional(),
            room_classId: z
                .union([
                    z.lazy(() => StringWithAggregatesFilterObjectSchema),
                    z.string(),
                ])
                .optional(),
        })
        .strict()

export const roomclass_featureScalarWhereWithAggregatesInputObjectSchema =
    Schema
