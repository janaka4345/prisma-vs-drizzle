import { z } from 'zod'
import { booking_roomCreateInputObjectSchema } from './objects/booking_roomCreateInput.schema'
import { booking_roomUncheckedCreateInputObjectSchema } from './objects/booking_roomUncheckedCreateInput.schema'

export const booking_roomCreateOneSchema = z.object({
    data: z.union([
        booking_roomCreateInputObjectSchema,
        booking_roomUncheckedCreateInputObjectSchema,
    ]),
})
