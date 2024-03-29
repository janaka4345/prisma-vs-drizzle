import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { SortOrderInputObjectSchema } from './SortOrderInput.schema'
import { GuestOrderByWithRelationInputObjectSchema } from './GuestOrderByWithRelationInput.schema'
import { Payment_statusOrderByWithRelationInputObjectSchema } from './Payment_statusOrderByWithRelationInput.schema'
import { booking_addonOrderByRelationAggregateInputObjectSchema } from './booking_addonOrderByRelationAggregateInput.schema'
import { booking_roomOrderByRelationAggregateInputObjectSchema } from './booking_roomOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        checkin_date: z.lazy(() => SortOrderSchema).optional(),
        checkout_date: z.lazy(() => SortOrderSchema).optional(),
        num_adults: z.lazy(() => SortOrderSchema).optional(),
        num_children: z.lazy(() => SortOrderSchema).optional(),
        booking_amount: z.lazy(() => SortOrderSchema).optional(),
        guestId: z.lazy(() => SortOrderSchema).optional(),
        payment_statusId: z
            .union([
                z.lazy(() => SortOrderSchema),
                z.lazy(() => SortOrderInputObjectSchema),
            ])
            .optional(),
        guest: z
            .lazy(() => GuestOrderByWithRelationInputObjectSchema)
            .optional(),
        payment_status: z
            .lazy(() => Payment_statusOrderByWithRelationInputObjectSchema)
            .optional(),
        booking_addon: z
            .lazy(() => booking_addonOrderByRelationAggregateInputObjectSchema)
            .optional(),
        booking_room: z
            .lazy(() => booking_roomOrderByRelationAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const BookingOrderByWithRelationInputObjectSchema = Schema
