import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => FloorScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(() => FloorScalarWhereWithAggregatesInputObjectSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => FloorScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => FloorScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(() => FloorScalarWhereWithAggregatesInputObjectSchema)
                    .array(),
            ])
            .optional(),
        id: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        floor_number: z
            .union([
                z.lazy(() => IntWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
    })
    .strict()

export const FloorScalarWhereWithAggregatesInputObjectSchema = Schema
