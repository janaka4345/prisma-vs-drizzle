import { z } from 'zod'
import { room_class_bed_typeWhereInputObjectSchema } from './room_class_bed_typeWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_class_bed_typeListRelationFilter> = z
    .object({
        every: z
            .lazy(() => room_class_bed_typeWhereInputObjectSchema)
            .optional(),
        some: z
            .lazy(() => room_class_bed_typeWhereInputObjectSchema)
            .optional(),
        none: z
            .lazy(() => room_class_bed_typeWhereInputObjectSchema)
            .optional(),
    })
    .strict()

export const Room_class_bed_typeListRelationFilterObjectSchema = Schema
