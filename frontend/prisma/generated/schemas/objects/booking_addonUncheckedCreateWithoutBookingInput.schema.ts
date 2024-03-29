import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUncheckedCreateWithoutBookingInput> =
    z
        .object({
            addonId: z.string(),
        })
        .strict()

export const booking_addonUncheckedCreateWithoutBookingInputObjectSchema =
    Schema
