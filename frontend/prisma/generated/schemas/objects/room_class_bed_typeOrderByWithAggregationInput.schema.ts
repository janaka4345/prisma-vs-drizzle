import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { room_class_bed_typeCountOrderByAggregateInputObjectSchema } from './room_class_bed_typeCountOrderByAggregateInput.schema'
import { room_class_bed_typeAvgOrderByAggregateInputObjectSchema } from './room_class_bed_typeAvgOrderByAggregateInput.schema'
import { room_class_bed_typeMaxOrderByAggregateInputObjectSchema } from './room_class_bed_typeMaxOrderByAggregateInput.schema'
import { room_class_bed_typeMinOrderByAggregateInputObjectSchema } from './room_class_bed_typeMinOrderByAggregateInput.schema'
import { room_class_bed_typeSumOrderByAggregateInputObjectSchema } from './room_class_bed_typeSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeOrderByWithAggregationInput> =
    z
        .object({
            room_classId: z.lazy(() => SortOrderSchema).optional(),
            bed_typeId: z.lazy(() => SortOrderSchema).optional(),
            num_of_beds: z.lazy(() => SortOrderSchema).optional(),
            _count: z
                .lazy(
                    () =>
                        room_class_bed_typeCountOrderByAggregateInputObjectSchema
                )
                .optional(),
            _avg: z
                .lazy(
                    () =>
                        room_class_bed_typeAvgOrderByAggregateInputObjectSchema
                )
                .optional(),
            _max: z
                .lazy(
                    () =>
                        room_class_bed_typeMaxOrderByAggregateInputObjectSchema
                )
                .optional(),
            _min: z
                .lazy(
                    () =>
                        room_class_bed_typeMinOrderByAggregateInputObjectSchema
                )
                .optional(),
            _sum: z
                .lazy(
                    () =>
                        room_class_bed_typeSumOrderByAggregateInputObjectSchema
                )
                .optional(),
        })
        .strict()

export const room_class_bed_typeOrderByWithAggregationInputObjectSchema = Schema
