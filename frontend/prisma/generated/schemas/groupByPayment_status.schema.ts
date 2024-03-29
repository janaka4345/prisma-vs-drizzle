import { z } from 'zod'
import { Payment_statusWhereInputObjectSchema } from './objects/Payment_statusWhereInput.schema'
import { Payment_statusOrderByWithAggregationInputObjectSchema } from './objects/Payment_statusOrderByWithAggregationInput.schema'
import { Payment_statusScalarWhereWithAggregatesInputObjectSchema } from './objects/Payment_statusScalarWhereWithAggregatesInput.schema'
import { Payment_statusScalarFieldEnumSchema } from './enums/Payment_statusScalarFieldEnum.schema'

export const Payment_statusGroupBySchema = z.object({
    where: Payment_statusWhereInputObjectSchema.optional(),
    orderBy: z
        .union([
            Payment_statusOrderByWithAggregationInputObjectSchema,
            Payment_statusOrderByWithAggregationInputObjectSchema.array(),
        ])
        .optional(),
    having: Payment_statusScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(Payment_statusScalarFieldEnumSchema),
})
