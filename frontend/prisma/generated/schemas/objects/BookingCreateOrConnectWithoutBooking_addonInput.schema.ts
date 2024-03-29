import { z } from 'zod'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingCreateWithoutBooking_addonInputObjectSchema } from './BookingCreateWithoutBooking_addonInput.schema'
import { BookingUncheckedCreateWithoutBooking_addonInputObjectSchema } from './BookingUncheckedCreateWithoutBooking_addonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateOrConnectWithoutBooking_addonInput> =
    z
        .object({
            where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(
                    () => BookingCreateWithoutBooking_addonInputObjectSchema
                ),
                z.lazy(
                    () =>
                        BookingUncheckedCreateWithoutBooking_addonInputObjectSchema
                ),
            ]),
        })
        .strict()

export const BookingCreateOrConnectWithoutBooking_addonInputObjectSchema =
    Schema
