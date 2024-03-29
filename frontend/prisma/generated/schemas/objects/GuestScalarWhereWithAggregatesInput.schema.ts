import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => GuestScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(() => GuestScalarWhereWithAggregatesInputObjectSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => GuestScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => GuestScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(() => GuestScalarWhereWithAggregatesInputObjectSchema)
                    .array(),
            ])
            .optional(),
        id: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        first_name: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        last_name: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        email: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        phone_no: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
    })
    .strict()

export const GuestScalarWhereWithAggregatesInputObjectSchema = Schema
