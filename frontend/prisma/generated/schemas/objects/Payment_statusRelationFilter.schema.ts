import { z } from 'zod'
import { Payment_statusWhereInputObjectSchema } from './Payment_statusWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusRelationFilter> = z
    .object({
        is: z
            .lazy(() => Payment_statusWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => Payment_statusWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict()

export const Payment_statusRelationFilterObjectSchema = Schema
