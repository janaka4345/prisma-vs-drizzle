import { z } from 'zod'
import { BookingCreateWithoutBooking_addonInputObjectSchema } from './BookingCreateWithoutBooking_addonInput.schema'
import { BookingUncheckedCreateWithoutBooking_addonInputObjectSchema } from './BookingUncheckedCreateWithoutBooking_addonInput.schema'
import { BookingCreateOrConnectWithoutBooking_addonInputObjectSchema } from './BookingCreateOrConnectWithoutBooking_addonInput.schema'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateNestedOneWithoutBooking_addonInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => BookingCreateWithoutBooking_addonInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            BookingUncheckedCreateWithoutBooking_addonInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        BookingCreateOrConnectWithoutBooking_addonInputObjectSchema
                )
                .optional(),
            connect: z
                .lazy(() => BookingWhereUniqueInputObjectSchema)
                .optional(),
        })
        .strict()

export const BookingCreateNestedOneWithoutBooking_addonInputObjectSchema =
    Schema
