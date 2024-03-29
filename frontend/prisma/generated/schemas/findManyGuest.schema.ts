import { z } from 'zod'
import { GuestOrderByWithRelationInputObjectSchema } from './objects/GuestOrderByWithRelationInput.schema'
import { GuestWhereInputObjectSchema } from './objects/GuestWhereInput.schema'
import { GuestWhereUniqueInputObjectSchema } from './objects/GuestWhereUniqueInput.schema'
import { GuestScalarFieldEnumSchema } from './enums/GuestScalarFieldEnum.schema'

export const GuestFindManySchema = z.object({
    orderBy: z
        .union([
            GuestOrderByWithRelationInputObjectSchema,
            GuestOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
    where: GuestWhereInputObjectSchema.optional(),
    cursor: GuestWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(GuestScalarFieldEnumSchema).optional(),
})
