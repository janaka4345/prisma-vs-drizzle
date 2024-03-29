import { z } from 'zod'
import { BookingUncheckedCreateNestedManyWithoutGuestInputObjectSchema } from './BookingUncheckedCreateNestedManyWithoutGuestInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestUncheckedCreateInput> = z
    .object({
        id: z.string().optional(),
        first_name: z.string(),
        last_name: z.string(),
        email: z.string(),
        phone_no: z.string().optional().nullable(),
        Booking: z
            .lazy(
                () =>
                    BookingUncheckedCreateNestedManyWithoutGuestInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const GuestUncheckedCreateInputObjectSchema = Schema
