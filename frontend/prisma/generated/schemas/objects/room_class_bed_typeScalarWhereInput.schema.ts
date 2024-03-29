import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => room_class_bed_typeScalarWhereInputObjectSchema),
                z
                    .lazy(() => room_class_bed_typeScalarWhereInputObjectSchema)
                    .array(),
            ])
            .optional(),
        OR: z
            .lazy(() => room_class_bed_typeScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => room_class_bed_typeScalarWhereInputObjectSchema),
                z
                    .lazy(() => room_class_bed_typeScalarWhereInputObjectSchema)
                    .array(),
            ])
            .optional(),
        room_classId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        bed_typeId: z
            .union([z.lazy(() => StringFilterObjectSchema), z.string()])
            .optional(),
        num_of_beds: z
            .union([z.lazy(() => IntFilterObjectSchema), z.number()])
            .optional(),
    })
    .strict()

export const room_class_bed_typeScalarWhereInputObjectSchema = Schema
