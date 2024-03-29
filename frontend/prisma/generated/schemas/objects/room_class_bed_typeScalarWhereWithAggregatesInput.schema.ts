import { z } from 'zod'
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeScalarWhereWithAggregatesInput> =
    z
        .object({
            AND: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeScalarWhereWithAggregatesInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeScalarWhereWithAggregatesInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            OR: z
                .lazy(
                    () =>
                        room_class_bed_typeScalarWhereWithAggregatesInputObjectSchema
                )
                .array()
                .optional(),
            NOT: z
                .union([
                    z.lazy(
                        () =>
                            room_class_bed_typeScalarWhereWithAggregatesInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                room_class_bed_typeScalarWhereWithAggregatesInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            room_classId: z
                .union([
                    z.lazy(() => StringWithAggregatesFilterObjectSchema),
                    z.string(),
                ])
                .optional(),
            bed_typeId: z
                .union([
                    z.lazy(() => StringWithAggregatesFilterObjectSchema),
                    z.string(),
                ])
                .optional(),
            num_of_beds: z
                .union([
                    z.lazy(() => IntWithAggregatesFilterObjectSchema),
                    z.number(),
                ])
                .optional(),
        })
        .strict()

export const room_class_bed_typeScalarWhereWithAggregatesInputObjectSchema =
    Schema
