import { z } from 'zod'
import { GuestUpdateInputObjectSchema } from './objects/GuestUpdateInput.schema'
import { GuestUncheckedUpdateInputObjectSchema } from './objects/GuestUncheckedUpdateInput.schema'
import { GuestWhereUniqueInputObjectSchema } from './objects/GuestWhereUniqueInput.schema'

export const GuestUpdateOneSchema = z.object({
    data: z.union([
        GuestUpdateInputObjectSchema,
        GuestUncheckedUpdateInputObjectSchema,
    ]),
    where: GuestWhereUniqueInputObjectSchema,
})
