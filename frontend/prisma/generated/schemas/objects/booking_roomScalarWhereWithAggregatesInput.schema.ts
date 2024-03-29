import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(
                    () => booking_roomScalarWhereWithAggregatesInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            booking_roomScalarWhereWithAggregatesInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => booking_roomScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(
                    () => booking_roomScalarWhereWithAggregatesInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            booking_roomScalarWhereWithAggregatesInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        roomId: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        bookingId: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
    })
    .strict()

export const booking_roomScalarWhereWithAggregatesInputObjectSchema = Schema
