import { z } from 'zod'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingCreateWithoutPayment_statusInputObjectSchema } from './BookingCreateWithoutPayment_statusInput.schema'
import { BookingUncheckedCreateWithoutPayment_statusInputObjectSchema } from './BookingUncheckedCreateWithoutPayment_statusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateOrConnectWithoutPayment_statusInput> =
    z
        .object({
            where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(
                    () => BookingCreateWithoutPayment_statusInputObjectSchema
                ),
                z.lazy(
                    () =>
                        BookingUncheckedCreateWithoutPayment_statusInputObjectSchema
                ),
            ]),
        })
        .strict()

export const BookingCreateOrConnectWithoutPayment_statusInputObjectSchema =
    Schema
