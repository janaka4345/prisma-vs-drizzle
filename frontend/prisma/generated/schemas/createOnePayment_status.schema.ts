import { z } from 'zod'
import { Payment_statusCreateInputObjectSchema } from './objects/Payment_statusCreateInput.schema'
import { Payment_statusUncheckedCreateInputObjectSchema } from './objects/Payment_statusUncheckedCreateInput.schema'

export const Payment_statusCreateOneSchema = z.object({
    data: z.union([
        Payment_statusCreateInputObjectSchema,
        Payment_statusUncheckedCreateInputObjectSchema,
    ]),
})
