import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { GuestUpdateOneRequiredWithoutBookingNestedInputObjectSchema } from './GuestUpdateOneRequiredWithoutBookingNestedInput.schema'
import { Payment_statusUpdateOneWithoutBookingNestedInputObjectSchema } from './Payment_statusUpdateOneWithoutBookingNestedInput.schema'
import { booking_addonUpdateManyWithoutBookingNestedInputObjectSchema } from './booking_addonUpdateManyWithoutBookingNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUpdateWithoutBooking_roomInput> = z
    .object({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        checkin_date: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        checkout_date: z
            .union([
                z.coerce.date(),
                z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        num_adults: z
            .union([
                z.number(),
                z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        num_children: z
            .union([
                z.number(),
                z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        booking_amount: z
            .union([
                z.number(),
                z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        guest: z
            .lazy(
                () =>
                    GuestUpdateOneRequiredWithoutBookingNestedInputObjectSchema
            )
            .optional(),
        payment_status: z
            .lazy(
                () =>
                    Payment_statusUpdateOneWithoutBookingNestedInputObjectSchema
            )
            .optional(),
        booking_addon: z
            .lazy(
                () =>
                    booking_addonUpdateManyWithoutBookingNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const BookingUpdateWithoutBooking_roomInputObjectSchema = Schema
