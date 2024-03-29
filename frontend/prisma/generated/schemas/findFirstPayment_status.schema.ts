import { z } from 'zod'
import { Payment_statusOrderByWithRelationInputObjectSchema } from './objects/Payment_statusOrderByWithRelationInput.schema'
import { Payment_statusWhereInputObjectSchema } from './objects/Payment_statusWhereInput.schema'
import { Payment_statusWhereUniqueInputObjectSchema } from './objects/Payment_statusWhereUniqueInput.schema'
import { Payment_statusScalarFieldEnumSchema } from './enums/Payment_statusScalarFieldEnum.schema'

export const Payment_statusFindFirstSchema = z.object({
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
    distinct: z.array(Payment_statusScalarFieldEnumSchema).optional(),
})
