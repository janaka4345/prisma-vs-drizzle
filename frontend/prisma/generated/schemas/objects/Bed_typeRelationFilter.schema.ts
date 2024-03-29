import { z } from 'zod'
import { Bed_typeWhereInputObjectSchema } from './Bed_typeWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeRelationFilter> = z
    .object({
        is: z
            .lazy(() => Bed_typeWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => Bed_typeWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict()

export const Bed_typeRelationFilterObjectSchema = Schema
