import { z } from 'zod'
import { Payment_statusWhereInputObjectSchema } from './objects/Payment_statusWhereInput.schema'

export const Payment_statusDeleteManySchema = z.object({
    where: Payment_statusWhereInputObjectSchema.optional(),
})
