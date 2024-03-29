import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => booking_addonScalarWhereInputObjectSchema),
                z.lazy(() => booking_addonScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => booking_addonScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => booking_addonScalarWhereInputObjectSchema),
                z.lazy(() => booking_addonScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        addonId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        bookingId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
    })
    .strict()

export const booking_addonScalarWhereInputObjectSchema = Schema
