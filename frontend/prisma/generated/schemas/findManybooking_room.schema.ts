import { z } from 'zod'
import { booking_roomOrderByWithRelationInputObjectSchema } from './objects/booking_roomOrderByWithRelationInput.schema'
import { booking_roomWhereInputObjectSchema } from './objects/booking_roomWhereInput.schema'
import { booking_roomWhereUniqueInputObjectSchema } from './objects/booking_roomWhereUniqueInput.schema'
import { booking_roomScalarFieldEnumSchema } from './enums/booking_roomScalarFieldEnum.schema'

export const booking_roomFindManySchema = z.object({
    orderBy: z
        .union([
            booking_roomOrderByWithRelationInputObjectSchema,
            booking_roomOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
    where: booking_roomWhereInputObjectSchema.optional(),
    cursor: booking_roomWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(booking_roomScalarFieldEnumSchema).optional(),
})
