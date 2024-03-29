import { z } from 'zod'
import { AddonCreateNestedOneWithoutBooking_addonInputObjectSchema } from './AddonCreateNestedOneWithoutBooking_addonInput.schema'
import { BookingCreateNestedOneWithoutBooking_addonInputObjectSchema } from './BookingCreateNestedOneWithoutBooking_addonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonCreateInput> = z
    .object({
        addon: z.lazy(
            () => AddonCreateNestedOneWithoutBooking_addonInputObjectSchema
        ),
        booking: z.lazy(
            () => BookingCreateNestedOneWithoutBooking_addonInputObjectSchema
        ),
    })
    .strict()

export const booking_addonCreateInputObjectSchema = Schema
