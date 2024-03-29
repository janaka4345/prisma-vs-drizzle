import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestUncheckedCreateWithoutBookingInput> = z
    .object({
        id: z.string().optional(),
        first_name: z.string(),
        last_name: z.string(),
        email: z.string(),
        phone_no: z.string().optional().nullable(),
    })
    .strict()

export const GuestUncheckedCreateWithoutBookingInputObjectSchema = Schema
