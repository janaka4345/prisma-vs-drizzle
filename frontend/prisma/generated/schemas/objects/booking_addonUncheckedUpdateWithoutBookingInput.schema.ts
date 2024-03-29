import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUncheckedUpdateWithoutBookingInput> =
    z
        .object({
            addonId: z
                .union([
                    z.string(),
                    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
        })
        .strict()

export const booking_addonUncheckedUpdateWithoutBookingInputObjectSchema =
    Schema
