import { z } from 'zod'
import { booking_roomWhereUniqueInputObjectSchema } from './objects/booking_roomWhereUniqueInput.schema'

export const booking_roomFindUniqueSchema = z.object({
    where: booking_roomWhereUniqueInputObjectSchema,
})
