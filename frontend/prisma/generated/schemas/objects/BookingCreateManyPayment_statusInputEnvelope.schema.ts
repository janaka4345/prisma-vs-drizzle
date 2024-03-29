import { z } from 'zod'
import { BookingCreateManyPayment_statusInputObjectSchema } from './BookingCreateManyPayment_statusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateManyPayment_statusInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => BookingCreateManyPayment_statusInputObjectSchema),
            z
                .lazy(() => BookingCreateManyPayment_statusInputObjectSchema)
                .array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const BookingCreateManyPayment_statusInputEnvelopeObjectSchema = Schema
