import { z } from 'zod'
import { FloorWhereInputObjectSchema } from './FloorWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FloorRelationFilter> = z
    .object({
        is: z
            .lazy(() => FloorWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => FloorWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict()

export const FloorRelationFilterObjectSchema = Schema
