import { z } from 'zod'
import { booking_addonCreateManyBookingInputObjectSchema } from './booking_addonCreateManyBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonCreateManyBookingInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => booking_addonCreateManyBookingInputObjectSchema),
            z
                .lazy(() => booking_addonCreateManyBookingInputObjectSchema)
                .array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const booking_addonCreateManyBookingInputEnvelopeObjectSchema = Schema
