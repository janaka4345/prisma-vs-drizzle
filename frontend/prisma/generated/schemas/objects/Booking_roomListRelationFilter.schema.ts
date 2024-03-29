import { z } from 'zod'
import { booking_roomWhereInputObjectSchema } from './booking_roomWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Booking_roomListRelationFilter> = z
    .object({
        every: z.lazy(() => booking_roomWhereInputObjectSchema).optional(),
        some: z.lazy(() => booking_roomWhereInputObjectSchema).optional(),
        none: z.lazy(() => booking_roomWhereInputObjectSchema).optional(),
    })
    .strict()

export const Booking_roomListRelationFilterObjectSchema = Schema
