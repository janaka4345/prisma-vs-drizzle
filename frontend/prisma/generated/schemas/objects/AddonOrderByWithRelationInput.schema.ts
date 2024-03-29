import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { booking_addonOrderByRelationAggregateInputObjectSchema } from './booking_addonOrderByRelationAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        addon_name: z.lazy(() => SortOrderSchema).optional(),
        Price: z.lazy(() => SortOrderSchema).optional(),
        booking_addon: z
            .lazy(() => booking_addonOrderByRelationAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const AddonOrderByWithRelationInputObjectSchema = Schema
