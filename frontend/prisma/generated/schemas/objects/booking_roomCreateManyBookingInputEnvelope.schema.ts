import { z } from 'zod'
import { booking_roomCreateManyBookingInputObjectSchema } from './booking_roomCreateManyBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomCreateManyBookingInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => booking_roomCreateManyBookingInputObjectSchema),
            z
                .lazy(() => booking_roomCreateManyBookingInputObjectSchema)
                .array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const booking_roomCreateManyBookingInputEnvelopeObjectSchema = Schema
