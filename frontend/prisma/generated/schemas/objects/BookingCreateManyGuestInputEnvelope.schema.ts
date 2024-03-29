import { z } from 'zod'
import { BookingCreateManyGuestInputObjectSchema } from './BookingCreateManyGuestInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateManyGuestInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => BookingCreateManyGuestInputObjectSchema),
            z.lazy(() => BookingCreateManyGuestInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const BookingCreateManyGuestInputEnvelopeObjectSchema = Schema
