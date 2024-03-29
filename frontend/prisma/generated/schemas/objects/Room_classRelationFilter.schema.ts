import { z } from 'zod'
import { Room_classWhereInputObjectSchema } from './Room_classWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_classRelationFilter> = z
    .object({
        is: z
            .lazy(() => Room_classWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => Room_classWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict()

export const Room_classRelationFilterObjectSchema = Schema
