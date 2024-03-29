import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { BookingListRelationFilterObjectSchema } from './BookingListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => Payment_statusWhereInputObjectSchema),
                z.lazy(() => Payment_statusWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => Payment_statusWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => Payment_statusWhereInputObjectSchema),
                z.lazy(() => Payment_statusWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        status: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        Booking: z.lazy(() => BookingListRelationFilterObjectSchema).optional(),
    })
    .strict()

export const Payment_statusWhereInputObjectSchema = Schema
