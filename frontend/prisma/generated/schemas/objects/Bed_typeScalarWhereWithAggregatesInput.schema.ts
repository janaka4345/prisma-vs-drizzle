import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(
                    () => Bed_typeScalarWhereWithAggregatesInputObjectSchema
                ),
                z
                    .lazy(
                        () => Bed_typeScalarWhereWithAggregatesInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => Bed_typeScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(
                    () => Bed_typeScalarWhereWithAggregatesInputObjectSchema
                ),
                z
                    .lazy(
                        () => Bed_typeScalarWhereWithAggregatesInputObjectSchema
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
        bed_type: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
    })
    .strict()

export const Bed_typeScalarWhereWithAggregatesInputObjectSchema = Schema
