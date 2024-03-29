import { z } from 'zod'
import { AddonWhereInputObjectSchema } from './AddonWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonRelationFilter> = z
    .object({
        is: z
            .lazy(() => AddonWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => AddonWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict()

export const AddonRelationFilterObjectSchema = Schema
