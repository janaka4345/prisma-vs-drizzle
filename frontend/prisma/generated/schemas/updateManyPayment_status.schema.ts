import { z } from 'zod'
import { Payment_statusUpdateManyMutationInputObjectSchema } from './objects/Payment_statusUpdateManyMutationInput.schema'
import { Payment_statusWhereInputObjectSchema } from './objects/Payment_statusWhereInput.schema'

export const Payment_statusUpdateManySchema = z.object({
    data: Payment_statusUpdateManyMutationInputObjectSchema,
    where: Payment_statusWhereInputObjectSchema.optional(),
})
