import { z } from 'zod'
import { Payment_statusOrderByWithRelationInputObjectSchema } from './objects/Payment_statusOrderByWithRelationInput.schema'
import { Payment_statusWhereInputObjectSchema } from './objects/Payment_statusWhereInput.schema'
import { Payment_statusWhereUniqueInputObjectSchema } from './objects/Payment_statusWhereUniqueInput.schema'
import { Payment_statusCountAggregateInputObjectSchema } from './objects/Payment_statusCountAggregateInput.schema'
import { Payment_statusMinAggregateInputObjectSchema } from './objects/Payment_statusMinAggregateInput.schema'
import { Payment_statusMaxAggregateInputObjectSchema } from './objects/Payment_statusMaxAggregateInput.schema'

export const Payment_statusAggregateSchema = z.object({
    orderBy: z
        .union([
            Payment_statusOrderByWithRelationInputObjectSchema,
            Payment_statusOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
    where: Payment_statusWhereInputObjectSchema.optional(),
    cursor: Payment_statusWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
        .union([z.literal(true), Payment_statusCountAggregateInputObjectSchema])
        .optional(),
    _min: Payment_statusMinAggregateInputObjectSchema.optional(),
    _max: Payment_statusMaxAggregateInputObjectSchema.optional(),
})
