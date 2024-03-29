import { z } from 'zod'
import { booking_roomUpdateManyMutationInputObjectSchema } from './objects/booking_roomUpdateManyMutationInput.schema'
import { booking_roomWhereInputObjectSchema } from './objects/booking_roomWhereInput.schema'

export const booking_roomUpdateManySchema = z.object({
    data: booking_roomUpdateManyMutationInputObjectSchema,
    where: booking_roomWhereInputObjectSchema.optional(),
})
