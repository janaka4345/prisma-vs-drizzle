import { z } from 'zod'
import { BookingCreateNestedManyWithoutPayment_statusInputObjectSchema } from './BookingCreateNestedManyWithoutPayment_statusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusCreateInput> = z
    .object({
        id: z.string().optional(),
        status: z.string(),
        Booking: z
            .lazy(
                () =>
                    BookingCreateNestedManyWithoutPayment_statusInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Payment_statusCreateInputObjectSchema = Schema
