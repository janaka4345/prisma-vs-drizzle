import { z } from 'zod'
import { AddonCreateNestedOneWithoutBooking_addonInputObjectSchema } from './AddonCreateNestedOneWithoutBooking_addonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonCreateWithoutBookingInput> = z
    .object({
        addon: z.lazy(
            () => AddonCreateNestedOneWithoutBooking_addonInputObjectSchema
        ),
    })
    .strict()

export const booking_addonCreateWithoutBookingInputObjectSchema = Schema
