import { z } from 'zod'
import { Room_statusWhereInputObjectSchema } from './Room_statusWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusRelationFilter> = z
    .object({
        is: z
            .lazy(() => Room_statusWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => Room_statusWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict()

export const Room_statusRelationFilterObjectSchema = Schema
