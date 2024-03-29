import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => AddonScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(() => AddonScalarWhereWithAggregatesInputObjectSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => AddonScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => AddonScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(() => AddonScalarWhereWithAggregatesInputObjectSchema)
                    .array(),
            ])
            .optional(),
        id: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        addon_name: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        Price: z
            .union([
                z.lazy(() => FloatWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
    })
    .strict()

export const AddonScalarWhereWithAggregatesInputObjectSchema = Schema
