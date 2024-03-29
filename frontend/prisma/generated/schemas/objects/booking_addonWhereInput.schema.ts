import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { AddonRelationFilterObjectSchema } from './AddonRelationFilter.schema'
import { AddonWhereInputObjectSchema } from './AddonWhereInput.schema'
import { BookingRelationFilterObjectSchema } from './BookingRelationFilter.schema'
import { BookingWhereInputObjectSchema } from './BookingWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => booking_addonWhereInputObjectSchema),
                z.lazy(() => booking_addonWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => booking_addonWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => booking_addonWhereInputObjectSchema),
                z.lazy(() => booking_addonWhereInputObjectSchema).array(),
            ])
            .optional(),
        addonId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        bookingId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        addon: z
            .union([
                z.lazy(() => AddonRelationFilterObjectSchema),
                z.lazy(() => AddonWhereInputObjectSchema),
            ])
            .optional(),
        booking: z
            .union([
                z.lazy(() => BookingRelationFilterObjectSchema),
                z.lazy(() => BookingWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict()

export const booking_addonWhereInputObjectSchema = Schema
