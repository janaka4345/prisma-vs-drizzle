import { z } from 'zod'
import { GuestWhereInputObjectSchema } from './GuestWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestRelationFilter> = z
    .object({
        is: z
            .lazy(() => GuestWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => GuestWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict()

export const GuestRelationFilterObjectSchema = Schema
