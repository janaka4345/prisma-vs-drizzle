import { z } from 'zod'
import { Payment_statusCreateManyInputObjectSchema } from './objects/Payment_statusCreateManyInput.schema'

export const Payment_statusCreateManySchema = z.object({
    data: z.union([
        Payment_statusCreateManyInputObjectSchema,
        z.array(Payment_statusCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
})
