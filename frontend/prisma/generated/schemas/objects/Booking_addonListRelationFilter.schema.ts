import { z } from 'zod'
import { booking_addonWhereInputObjectSchema } from './booking_addonWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Booking_addonListRelationFilter> = z
    .object({
        every: z.lazy(() => booking_addonWhereInputObjectSchema).optional(),
        some: z.lazy(() => booking_addonWhereInputObjectSchema).optional(),
        none: z.lazy(() => booking_addonWhereInputObjectSchema).optional(),
    })
    .strict()

export const Booking_addonListRelationFilterObjectSchema = Schema
