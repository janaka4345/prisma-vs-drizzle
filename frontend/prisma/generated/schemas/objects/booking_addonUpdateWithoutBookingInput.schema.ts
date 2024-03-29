import { z } from 'zod'
import { AddonUpdateOneRequiredWithoutBooking_addonNestedInputObjectSchema } from './AddonUpdateOneRequiredWithoutBooking_addonNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUpdateWithoutBookingInput> = z
    .object({
        addon: z
            .lazy(
                () =>
                    AddonUpdateOneRequiredWithoutBooking_addonNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const booking_addonUpdateWithoutBookingInputObjectSchema = Schema
