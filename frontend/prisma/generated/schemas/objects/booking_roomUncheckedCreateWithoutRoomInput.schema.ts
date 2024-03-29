import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUncheckedCreateWithoutRoomInput> = z
    .object({
        bookingId: z.string(),
    })
    .strict()

export const booking_roomUncheckedCreateWithoutRoomInputObjectSchema = Schema
