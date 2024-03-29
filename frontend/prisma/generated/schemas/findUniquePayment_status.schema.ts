import { z } from 'zod'
import { Payment_statusWhereUniqueInputObjectSchema } from './objects/Payment_statusWhereUniqueInput.schema'

export const Payment_statusFindUniqueSchema = z.object({
    where: Payment_statusWhereUniqueInputObjectSchema,
})
