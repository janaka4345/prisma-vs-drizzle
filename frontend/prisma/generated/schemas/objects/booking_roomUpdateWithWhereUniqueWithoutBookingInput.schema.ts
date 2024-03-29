import { z } from 'zod'
import { booking_roomWhereUniqueInputObjectSchema } from './booking_roomWhereUniqueInput.schema'
import { booking_roomUpdateWithoutBookingInputObjectSchema } from './booking_roomUpdateWithoutBookingInput.schema'
import { booking_roomUncheckedUpdateWithoutBookingInputObjectSchema } from './booking_roomUncheckedUpdateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUpdateWithWhereUniqueWithoutBookingInput> =
    z
        .object({
            where: z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(() => booking_roomUpdateWithoutBookingInputObjectSchema),
                z.lazy(
                    () =>
                        booking_roomUncheckedUpdateWithoutBookingInputObjectSchema
                ),
            ]),
        })
        .strict()

export const booking_roomUpdateWithWhereUniqueWithoutBookingInputObjectSchema =
    Schema
