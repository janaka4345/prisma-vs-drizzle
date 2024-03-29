import { z } from 'zod'
import { BookingUncheckedCreateNestedManyWithoutPayment_statusInputObjectSchema } from './BookingUncheckedCreateNestedManyWithoutPayment_statusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusUncheckedCreateInput> = z
    .object({
        id: z.string().optional(),
        status: z.string(),
        Booking: z
            .lazy(
                () =>
                    BookingUncheckedCreateNestedManyWithoutPayment_statusInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Payment_statusUncheckedCreateInputObjectSchema = Schema
