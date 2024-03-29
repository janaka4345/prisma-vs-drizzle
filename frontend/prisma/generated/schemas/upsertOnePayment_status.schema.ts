import { z } from 'zod'
import { Payment_statusWhereUniqueInputObjectSchema } from './objects/Payment_statusWhereUniqueInput.schema'
import { Payment_statusCreateInputObjectSchema } from './objects/Payment_statusCreateInput.schema'
import { Payment_statusUncheckedCreateInputObjectSchema } from './objects/Payment_statusUncheckedCreateInput.schema'
import { Payment_statusUpdateInputObjectSchema } from './objects/Payment_statusUpdateInput.schema'
import { Payment_statusUncheckedUpdateInputObjectSchema } from './objects/Payment_statusUncheckedUpdateInput.schema'

export const Payment_statusUpsertSchema = z.object({
    where: Payment_statusWhereUniqueInputObjectSchema,
    create: z.union([
        Payment_statusCreateInputObjectSchema,
        Payment_statusUncheckedCreateInputObjectSchema,
    ]),
    update: z.union([
        Payment_statusUpdateInputObjectSchema,
        Payment_statusUncheckedUpdateInputObjectSchema,
    ]),
})
