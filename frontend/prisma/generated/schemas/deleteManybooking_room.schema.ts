import { z } from 'zod'
import { booking_roomWhereInputObjectSchema } from './objects/booking_roomWhereInput.schema'

export const booking_roomDeleteManySchema = z.object({
    where: booking_roomWhereInputObjectSchema.optional(),
})
