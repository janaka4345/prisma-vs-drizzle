import { z } from 'zod'
import { booking_roomUpdateInputObjectSchema } from './objects/booking_roomUpdateInput.schema'
import { booking_roomUncheckedUpdateInputObjectSchema } from './objects/booking_roomUncheckedUpdateInput.schema'
import { booking_roomWhereUniqueInputObjectSchema } from './objects/booking_roomWhereUniqueInput.schema'

export const booking_roomUpdateOneSchema = z.object({
    data: z.union([
        booking_roomUpdateInputObjectSchema,
        booking_roomUncheckedUpdateInputObjectSchema,
    ]),
    where: booking_roomWhereUniqueInputObjectSchema,
})
