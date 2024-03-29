import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { FloatFilterObjectSchema } from './FloatFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { GuestRelationFilterObjectSchema } from './GuestRelationFilter.schema'
import { GuestWhereInputObjectSchema } from './GuestWhereInput.schema'
import { Payment_statusRelationFilterObjectSchema } from './Payment_statusRelationFilter.schema'
import { Payment_statusWhereInputObjectSchema } from './Payment_statusWhereInput.schema'
import { Booking_addonListRelationFilterObjectSchema } from './Booking_addonListRelationFilter.schema'
import { Booking_roomListRelationFilterObjectSchema } from './Booking_roomListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => BookingWhereInputObjectSchema),
                z.lazy(() => BookingWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => BookingWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => BookingWhereInputObjectSchema),
                z.lazy(() => BookingWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        checkin_date: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
        checkout_date: z
            .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
            .optional(),
        num_adults: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        num_children: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
        booking_amount: z
            .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
            .optional(),
        guestId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        payment_statusId: z
            .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
            .optional()
            .nullable(),
        guest: z
            .union([
                z.lazy(() => GuestRelationFilterObjectSchema),
                z.lazy(() => GuestWhereInputObjectSchema),
            ])
            .optional(),
        payment_status: z
            .union([
                z.lazy(() => Payment_statusRelationFilterObjectSchema),
                z.lazy(() => Payment_statusWhereInputObjectSchema),
            ])
            .optional()
            .nullable(),
        booking_addon: z
            .lazy(() => Booking_addonListRelationFilterObjectSchema)
            .optional(),
        booking_room: z
            .lazy(() => Booking_roomListRelationFilterObjectSchema)
            .optional(),
    })
    .strict()

export const BookingWhereInputObjectSchema = Schema
