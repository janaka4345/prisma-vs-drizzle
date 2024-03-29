import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonCreateManyBookingInput> = z
    .object({
        addonId: z.string(),
    })
    .strict()

export const booking_addonCreateManyBookingInputObjectSchema = Schema
