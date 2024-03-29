import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { booking_addonUncheckedUpdateManyWithoutBookingNestedInputObjectSchema } from './booking_addonUncheckedUpdateManyWithoutBookingNestedInput.schema'
import { booking_roomUncheckedUpdateManyWithoutBookingNestedInputObjectSchema } from './booking_roomUncheckedUpdateManyWithoutBookingNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUncheckedUpdateWithoutPayment_statusInput> =
    z
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
                    z.lazy(
                        () => DateTimeFieldUpdateOperationsInputObjectSchema
                    ),
                ])
                .optional(),
            checkout_date: z
                .union([
                    z.coerce.date(),
                    z.lazy(
                        () => DateTimeFieldUpdateOperationsInputObjectSchema
                    ),
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
            guestId: z
                .union([
                    z.string(),
                    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            booking_addon: z
                .lazy(
                    () =>
                        booking_addonUncheckedUpdateManyWithoutBookingNestedInputObjectSchema
                )
                .optional(),
            booking_room: z
                .lazy(
                    () =>
                        booking_roomUncheckedUpdateManyWithoutBookingNestedInputObjectSchema
                )
                .optional(),
        })
        .strict()

export const BookingUncheckedUpdateWithoutPayment_statusInputObjectSchema =
    Schema
