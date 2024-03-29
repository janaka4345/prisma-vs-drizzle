import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUncheckedCreateInput> = z
    .object({
        addonId: z.string(),
        bookingId: z.string(),
    })
    .strict()

export const booking_addonUncheckedCreateInputObjectSchema = Schema
