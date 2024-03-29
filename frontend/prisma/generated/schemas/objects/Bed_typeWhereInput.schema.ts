import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { Room_class_bed_typeListRelationFilterObjectSchema } from './Room_class_bed_typeListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => Bed_typeWhereInputObjectSchema),
                z.lazy(() => Bed_typeWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => Bed_typeWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => Bed_typeWhereInputObjectSchema),
                z.lazy(() => Bed_typeWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        bed_type: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        room_class_bed_type: z
            .lazy(() => Room_class_bed_typeListRelationFilterObjectSchema)
            .optional(),
    })
    .strict()

export const Bed_typeWhereInputObjectSchema = Schema
