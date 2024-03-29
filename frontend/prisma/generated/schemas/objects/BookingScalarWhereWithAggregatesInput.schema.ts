import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'
import { FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema'
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => BookingScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(
                        () => BookingScalarWhereWithAggregatesInputObjectSchema
                    )
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => BookingScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => BookingScalarWhereWithAggregatesInputObjectSchema),
                z
                    .lazy(
                        () => BookingScalarWhereWithAggregatesInputObjectSchema
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
        checkin_date: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
                z.coerce.date(),
            ])
            .optional(),
        checkout_date: z
            .union([
                z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
                z.coerce.date(),
            ])
            .optional(),
        num_adults: z
            .union([
                z.lazy(() => IntWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
        num_children: z
            .union([
                z.lazy(() => IntWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
        booking_amount: z
            .union([
                z.lazy(() => FloatWithAggregatesFilterObjectSchema),
                z.number(),
            ])
            .optional(),
        guestId: z
            .union([
                z.lazy(() => StringWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional(),
        payment_statusId: z
            .union([
                z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
                z.string(),
            ])
            .optional()
            .nullable(),
    })
    .strict()

export const BookingScalarWhereWithAggregatesInputObjectSchema = Schema
