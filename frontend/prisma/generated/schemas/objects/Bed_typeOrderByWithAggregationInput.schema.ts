import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { Bed_typeCountOrderByAggregateInputObjectSchema } from './Bed_typeCountOrderByAggregateInput.schema'
import { Bed_typeMaxOrderByAggregateInputObjectSchema } from './Bed_typeMaxOrderByAggregateInput.schema'
import { Bed_typeMinOrderByAggregateInputObjectSchema } from './Bed_typeMinOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        bed_type: z.lazy(() => SortOrderSchema).optional(),
        _count: z
            .lazy(() => Bed_typeCountOrderByAggregateInputObjectSchema)
            .optional(),
        _max: z
            .lazy(() => Bed_typeMaxOrderByAggregateInputObjectSchema)
            .optional(),
        _min: z
            .lazy(() => Bed_typeMinOrderByAggregateInputObjectSchema)
            .optional(),
    })
    .strict()

export const Bed_typeOrderByWithAggregationInputObjectSchema = Schema
