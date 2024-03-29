import { z } from 'zod'
import { booking_roomScalarWhereInputObjectSchema } from './booking_roomScalarWhereInput.schema'
import { booking_roomUpdateManyMutationInputObjectSchema } from './booking_roomUpdateManyMutationInput.schema'
import { booking_roomUncheckedUpdateManyWithoutBooking_roomInputObjectSchema } from './booking_roomUncheckedUpdateManyWithoutBooking_roomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUpdateManyWithWhereWithoutBookingInput> =
    z
        .object({
            where: z.lazy(() => booking_roomScalarWhereInputObjectSchema),
            data: z.union([
                z.lazy(() => booking_roomUpdateManyMutationInputObjectSchema),
                z.lazy(
                    () =>
                        booking_roomUncheckedUpdateManyWithoutBooking_roomInputObjectSchema
                ),
            ]),
        })
        .strict()

export const booking_roomUpdateManyWithWhereWithoutBookingInputObjectSchema =
    Schema
