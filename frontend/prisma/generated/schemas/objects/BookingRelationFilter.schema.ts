import { z } from 'zod'
import { BookingWhereInputObjectSchema } from './BookingWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingRelationFilter> = z
    .object({
        is: z
            .lazy(() => BookingWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => BookingWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict()

export const BookingRelationFilterObjectSchema = Schema
