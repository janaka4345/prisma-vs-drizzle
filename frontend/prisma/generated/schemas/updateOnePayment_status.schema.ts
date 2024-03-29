import { z } from 'zod'
import { Payment_statusUpdateInputObjectSchema } from './objects/Payment_statusUpdateInput.schema'
import { Payment_statusUncheckedUpdateInputObjectSchema } from './objects/Payment_statusUncheckedUpdateInput.schema'
import { Payment_statusWhereUniqueInputObjectSchema } from './objects/Payment_statusWhereUniqueInput.schema'

export const Payment_statusUpdateOneSchema = z.object({
    data: z.union([
        Payment_statusUpdateInputObjectSchema,
        Payment_statusUncheckedUpdateInputObjectSchema,
    ]),
    where: Payment_statusWhereUniqueInputObjectSchema,
})
