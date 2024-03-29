import { z } from 'zod'
import { booking_roomWhereUniqueInputObjectSchema } from './objects/booking_roomWhereUniqueInput.schema'
import { booking_roomCreateInputObjectSchema } from './objects/booking_roomCreateInput.schema'
import { booking_roomUncheckedCreateInputObjectSchema } from './objects/booking_roomUncheckedCreateInput.schema'
import { booking_roomUpdateInputObjectSchema } from './objects/booking_roomUpdateInput.schema'
import { booking_roomUncheckedUpdateInputObjectSchema } from './objects/booking_roomUncheckedUpdateInput.schema'

export const booking_roomUpsertSchema = z.object({
    where: booking_roomWhereUniqueInputObjectSchema,
    create: z.union([
        booking_roomCreateInputObjectSchema,
        booking_roomUncheckedCreateInputObjectSchema,
    ]),
    update: z.union([
        booking_roomUpdateInputObjectSchema,
        booking_roomUncheckedUpdateInputObjectSchema,
    ]),
})
