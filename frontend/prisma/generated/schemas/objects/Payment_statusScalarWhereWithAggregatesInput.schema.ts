import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(
                    () =>
                        Payment_statusScalarWhereWithAggregatesInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            Payment_statusScalarWhereWithAggregatesInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(
                () => Payment_statusScalarWhereWithAggregatesInputObjectSchema
            )
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(
                    () =>
                        Payment_statusScalarWhereWithAggregatesInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            Payment_statusScalarWhereWithAggregatesInputObjectSchema
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
        status: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
    })
    .strict()

export const Payment_statusScalarWhereWithAggregatesInputObjectSchema = Schema
