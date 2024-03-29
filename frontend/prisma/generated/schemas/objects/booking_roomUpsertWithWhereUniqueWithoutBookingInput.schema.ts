import { z } from 'zod'
import { booking_roomWhereUniqueInputObjectSchema } from './booking_roomWhereUniqueInput.schema'
import { booking_roomUpdateWithoutBookingInputObjectSchema } from './booking_roomUpdateWithoutBookingInput.schema'
import { booking_roomUncheckedUpdateWithoutBookingInputObjectSchema } from './booking_roomUncheckedUpdateWithoutBookingInput.schema'
import { booking_roomCreateWithoutBookingInputObjectSchema } from './booking_roomCreateWithoutBookingInput.schema'
import { booking_roomUncheckedCreateWithoutBookingInputObjectSchema } from './booking_roomUncheckedCreateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUpsertWithWhereUniqueWithoutBookingInput> =
    z
        .object({
            where: z.lazy(() => booking_roomWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(() => booking_roomUpdateWithoutBookingInputObjectSchema),
                z.lazy(
                    () =>
                        booking_roomUncheckedUpdateWithoutBookingInputObjectSchema
                ),
            ]),
            create: z.union([
                z.lazy(() => booking_roomCreateWithoutBookingInputObjectSchema),
                z.lazy(
                    () =>
                        booking_roomUncheckedCreateWithoutBookingInputObjectSchema
                ),
            ]),
        })
        .strict()

export const booking_roomUpsertWithWhereUniqueWithoutBookingInputObjectSchema =
    Schema
