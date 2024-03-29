import { z } from 'zod'
import { FeatureWhereInputObjectSchema } from './FeatureWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureRelationFilter> = z
    .object({
        is: z
            .lazy(() => FeatureWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => FeatureWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict()

export const FeatureRelationFilterObjectSchema = Schema
