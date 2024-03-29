import { z } from 'zod'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingUpdateWithoutPayment_statusInputObjectSchema } from './BookingUpdateWithoutPayment_statusInput.schema'
import { BookingUncheckedUpdateWithoutPayment_statusInputObjectSchema } from './BookingUncheckedUpdateWithoutPayment_statusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutPayment_statusInput> =
    z
        .object({
            where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(
                    () => BookingUpdateWithoutPayment_statusInputObjectSchema
                ),
                z.lazy(
                    () =>
                        BookingUncheckedUpdateWithoutPayment_statusInputObjectSchema
                ),
            ]),
        })
        .strict()

export const BookingUpdateWithWhereUniqueWithoutPayment_statusInputObjectSchema =
    Schema
