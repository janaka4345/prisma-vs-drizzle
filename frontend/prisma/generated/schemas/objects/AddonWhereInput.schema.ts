import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { FloatFilterObjectSchema } from './FloatFilter.schema'
import { Booking_addonListRelationFilterObjectSchema } from './Booking_addonListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => AddonWhereInputObjectSchema),
                z.lazy(() => AddonWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => AddonWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => AddonWhereInputObjectSchema),
                z.lazy(() => AddonWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        addon_name: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        Price: z
            .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
            .optional(),
        booking_addon: z
            .lazy(() => Booking_addonListRelationFilterObjectSchema)
            .optional(),
    })
    .strict()

export const AddonWhereInputObjectSchema = Schema
