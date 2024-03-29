import { z } from 'zod'
import { BookingUpdateOneRequiredWithoutBooking_addonNestedInputObjectSchema } from './BookingUpdateOneRequiredWithoutBooking_addonNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUpdateWithoutAddonInput> = z
    .object({
        booking: z
            .lazy(
                () =>
                    BookingUpdateOneRequiredWithoutBooking_addonNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const booking_addonUpdateWithoutAddonInputObjectSchema = Schema
