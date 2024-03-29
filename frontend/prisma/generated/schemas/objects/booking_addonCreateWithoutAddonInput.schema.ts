import { z } from 'zod'
import { BookingCreateNestedOneWithoutBooking_addonInputObjectSchema } from './BookingCreateNestedOneWithoutBooking_addonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonCreateWithoutAddonInput> = z
    .object({
        booking: z.lazy(
            () => BookingCreateNestedOneWithoutBooking_addonInputObjectSchema
        ),
    })
    .strict()

export const booking_addonCreateWithoutAddonInputObjectSchema = Schema
