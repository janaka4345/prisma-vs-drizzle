import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { BookingUpdateManyWithoutPayment_statusNestedInputObjectSchema } from './BookingUpdateManyWithoutPayment_statusNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusUpdateInput> = z
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
                    BookingUpdateManyWithoutPayment_statusNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Payment_statusUpdateInputObjectSchema = Schema
