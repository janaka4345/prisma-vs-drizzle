import { z } from 'zod'
import { BookingScalarWhereInputObjectSchema } from './BookingScalarWhereInput.schema'
import { BookingUpdateManyMutationInputObjectSchema } from './BookingUpdateManyMutationInput.schema'
import { BookingUncheckedUpdateManyWithoutBookingInputObjectSchema } from './BookingUncheckedUpdateManyWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutPayment_statusInput> =
    z
        .object({
            where: z.lazy(() => BookingScalarWhereInputObjectSchema),
            data: z.union([
                z.lazy(() => BookingUpdateManyMutationInputObjectSchema),
                z.lazy(
                    () =>
                        BookingUncheckedUpdateManyWithoutBookingInputObjectSchema
                ),
            ]),
        })
        .strict()

export const BookingUpdateManyWithWhereWithoutPayment_statusInputObjectSchema =
    Schema
