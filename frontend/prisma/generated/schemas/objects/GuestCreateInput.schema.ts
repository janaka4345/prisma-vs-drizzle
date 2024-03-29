import { z } from 'zod'
import { BookingCreateNestedManyWithoutGuestInputObjectSchema } from './BookingCreateNestedManyWithoutGuestInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestCreateInput> = z
    .object({
        id: z.string().optional(),
        first_name: z.string(),
        last_name: z.string(),
        email: z.string(),
        phone_no: z.string().optional().nullable(),
        Booking: z
            .lazy(() => BookingCreateNestedManyWithoutGuestInputObjectSchema)
            .optional(),
    })
    .strict()

export const GuestCreateInputObjectSchema = Schema
