import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(
                    () => Room_classScalarWhereWithAggregatesInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            Room_classScalarWhereWithAggregatesInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => Room_classScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(
                    () => Room_classScalarWhereWithAggregatesInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            Room_classScalarWhereWithAggregatesInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        id: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        class_name: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        base_price: z
            .union([
                z.lazy(() => FloatWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
    })
    .strict()

export const Room_classScalarWhereWithAggregatesInputObjectSchema = Schema
