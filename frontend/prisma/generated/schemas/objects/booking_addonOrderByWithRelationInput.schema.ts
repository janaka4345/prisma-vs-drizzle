import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { AddonOrderByWithRelationInputObjectSchema } from './AddonOrderByWithRelationInput.schema'
import { BookingOrderByWithRelationInputObjectSchema } from './BookingOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonOrderByWithRelationInput> = z
    .object({
        addonId: z.lazy(() => SortOrderSchema).optional(),
        bookingId: z.lazy(() => SortOrderSchema).optional(),
        addon: z
            .lazy(() => AddonOrderByWithRelationInputObjectSchema)
            .optional(),
        booking: z
            .lazy(() => BookingOrderByWithRelationInputObjectSchema)
            .optional(),
    })
    .strict()

export const booking_addonOrderByWithRelationInputObjectSchema = Schema
