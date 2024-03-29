import { z } from 'zod'
import { GuestWhereUniqueInputObjectSchema } from './objects/GuestWhereUniqueInput.schema'

export const GuestFindUniqueSchema = z.object({
    where: GuestWhereUniqueInputObjectSchema,
})
