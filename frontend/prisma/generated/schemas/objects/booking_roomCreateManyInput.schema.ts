import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomCreateManyInput> = z
    .object({
        roomId: z.string(),
        bookingId: z.string(),
    })
    .strict()

export const booking_roomCreateManyInputObjectSchema = Schema
