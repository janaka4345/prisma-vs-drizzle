import { z } from 'zod'
import { AddonUpdateOneRequiredWithoutBooking_addonNestedInputObjectSchema } from './AddonUpdateOneRequiredWithoutBooking_addonNestedInput.schema'
import { BookingUpdateOneRequiredWithoutBooking_addonNestedInputObjectSchema } from './BookingUpdateOneRequiredWithoutBooking_addonNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUpdateInput> = z
    .object({
        addon: z
            .lazy(
                () =>
                    AddonUpdateOneRequiredWithoutBooking_addonNestedInputObjectSchema
            )
            .optional(),
        booking: z
            .lazy(
                () =>
                    BookingUpdateOneRequiredWithoutBooking_addonNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const booking_addonUpdateInputObjectSchema = Schema
