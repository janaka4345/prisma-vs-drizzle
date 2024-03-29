import { z } from 'zod'
import { roomclass_featureWhereInputObjectSchema } from './roomclass_featureWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Roomclass_featureListRelationFilter> = z
    .object({
        every: z.lazy(() => roomclass_featureWhereInputObjectSchema).optional(),
        some: z.lazy(() => roomclass_featureWhereInputObjectSchema).optional(),
        none: z.lazy(() => roomclass_featureWhereInputObjectSchema).optional(),
    })
    .strict()

export const Roomclass_featureListRelationFilterObjectSchema = Schema
