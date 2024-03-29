import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BookingUncheckedUpdateManyWithoutPayment_statusNestedInputObjectSchema } from './BookingUncheckedUpdateManyWithoutPayment_statusNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusUncheckedUpdateInput> = z
    .object({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        status: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        Booking: z
            .lazy(
                () =>
                    BookingUncheckedUpdateManyWithoutPayment_statusNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Payment_statusUncheckedUpdateInputObjectSchema = Schema
