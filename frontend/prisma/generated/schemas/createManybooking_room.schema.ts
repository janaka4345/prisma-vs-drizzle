import { z } from 'zod'
import { booking_roomCreateManyInputObjectSchema } from './objects/booking_roomCreateManyInput.schema'

export const booking_roomCreateManySchema = z.object({
    data: z.union([
        booking_roomCreateManyInputObjectSchema,
        z.array(booking_roomCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
})
