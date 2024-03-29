import { z } from 'zod'
import { GuestWhereUniqueInputObjectSchema } from './objects/GuestWhereUniqueInput.schema'
import { GuestCreateInputObjectSchema } from './objects/GuestCreateInput.schema'
import { GuestUncheckedCreateInputObjectSchema } from './objects/GuestUncheckedCreateInput.schema'
import { GuestUpdateInputObjectSchema } from './objects/GuestUpdateInput.schema'
import { GuestUncheckedUpdateInputObjectSchema } from './objects/GuestUncheckedUpdateInput.schema'

export const GuestUpsertSchema = z.object({
    where: GuestWhereUniqueInputObjectSchema,
    create: z.union([
        GuestCreateInputObjectSchema,
        GuestUncheckedCreateInputObjectSchema,
    ]),
    update: z.union([
        GuestUpdateInputObjectSchema,
        GuestUncheckedUpdateInputObjectSchema,
    ]),
})
