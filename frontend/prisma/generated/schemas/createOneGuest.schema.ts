import { z } from 'zod'
import { GuestCreateInputObjectSchema } from './objects/GuestCreateInput.schema'
import { GuestUncheckedCreateInputObjectSchema } from './objects/GuestUncheckedCreateInput.schema'

export const GuestCreateOneSchema = z.object({
    data: z.union([
        GuestCreateInputObjectSchema,
        GuestUncheckedCreateInputObjectSchema,
    ]),
})
