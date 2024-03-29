import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => booking_roomScalarWhereInputObjectSchema),
                z.lazy(() => booking_roomScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => booking_roomScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => booking_roomScalarWhereInputObjectSchema),
                z.lazy(() => booking_roomScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        roomId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        bookingId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
    })
    .strict()

export const booking_roomScalarWhereInputObjectSchema = Schema
