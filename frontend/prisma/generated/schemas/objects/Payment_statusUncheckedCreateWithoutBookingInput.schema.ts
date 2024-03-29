import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusUncheckedCreateWithoutBookingInput> =
    z
        .object({
            id: z.string().optional(),
            status: z.string(),
        })
        .strict()

export const Payment_statusUncheckedCreateWithoutBookingInputObjectSchema =
    Schema
