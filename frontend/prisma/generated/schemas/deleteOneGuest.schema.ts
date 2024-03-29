import { z } from 'zod'
import { GuestWhereUniqueInputObjectSchema } from './objects/GuestWhereUniqueInput.schema'

export const GuestDeleteOneSchema = z.object({
    where: GuestWhereUniqueInputObjectSchema,
})
