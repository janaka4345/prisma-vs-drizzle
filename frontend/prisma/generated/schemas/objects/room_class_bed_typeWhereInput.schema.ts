import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { Room_classRelationFilterObjectSchema } from './Room_classRelationFilter.schema'
import { Room_classWhereInputObjectSchema } from './Room_classWhereInput.schema'
import { Bed_typeRelationFilterObjectSchema } from './Bed_typeRelationFilter.schema'
import { Bed_typeWhereInputObjectSchema } from './Bed_typeWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => room_class_bed_typeWhereInputObjectSchema),
                z.lazy(() => room_class_bed_typeWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => room_class_bed_typeWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => room_class_bed_typeWhereInputObjectSchema),
                z.lazy(() => room_class_bed_typeWhereInputObjectSchema).array(),
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
        room_class: z
            .union([
                z.lazy(() => Room_classRelationFilterObjectSchema),
                z.lazy(() => Room_classWhereInputObjectSchema),
            ])
            .optional(),
        bed_type: z
            .union([
                z.lazy(() => Bed_typeRelationFilterObjectSchema),
                z.lazy(() => Bed_typeWhereInputObjectSchema),
            ])
            .optional(),
    })
    .strict()

export const room_class_bed_typeWhereInputObjectSchema = Schema
