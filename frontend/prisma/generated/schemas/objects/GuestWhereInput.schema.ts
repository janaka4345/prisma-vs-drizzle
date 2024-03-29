import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { BookingListRelationFilterObjectSchema } from './BookingListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => GuestWhereInputObjectSchema),
                z.lazy(() => GuestWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => GuestWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => GuestWhereInputObjectSchema),
                z.lazy(() => GuestWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        first_name: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        last_name: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        email: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        phone_no: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
            .optional()
            .nullable(),
        Booking: z.lazy(() => BookingListRelationFilterObjectSchema).optional(),
    })
    .strict()

export const GuestWhereInputObjectSchema = Schema
