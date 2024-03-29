import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { FloatFilterObjectSchema } from './FloatFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => BookingScalarWhereInputObjectSchema),
                z.lazy(() => BookingScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => BookingScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => BookingScalarWhereInputObjectSchema),
                z.lazy(() => BookingScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        checkin_date: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
        checkout_date: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
        num_adults: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        num_children: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        booking_amount: z
            .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
            .optional(),
        guestId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        payment_statusId: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
            .optional()
            .nullable(),
    })
    .strict()

export const BookingScalarWhereInputObjectSchema = Schema
