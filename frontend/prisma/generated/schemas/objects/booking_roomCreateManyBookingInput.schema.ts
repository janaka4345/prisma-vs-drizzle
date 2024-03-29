import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomCreateManyBookingInput> = z
    .object({
        roomId: z.string(),
    })
    .strict()

export const booking_roomCreateManyBookingInputObjectSchema = Schema
