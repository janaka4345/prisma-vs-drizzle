import { z } from 'zod'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingUpdateWithoutPayment_statusInputObjectSchema } from './BookingUpdateWithoutPayment_statusInput.schema'
import { BookingUncheckedUpdateWithoutPayment_statusInputObjectSchema } from './BookingUncheckedUpdateWithoutPayment_statusInput.schema'
import { BookingCreateWithoutPayment_statusInputObjectSchema } from './BookingCreateWithoutPayment_statusInput.schema'
import { BookingUncheckedCreateWithoutPayment_statusInputObjectSchema } from './BookingUncheckedCreateWithoutPayment_statusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutPayment_statusInput> =
    z
        .object({
            where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(
                    () => BookingUpdateWithoutPayment_statusInputObjectSchema
                ),
                z.lazy(
                    () =>
                        BookingUncheckedUpdateWithoutPayment_statusInputObjectSchema
                ),
            ]),
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

export const BookingUpsertWithWhereUniqueWithoutPayment_statusInputObjectSchema =
    Schema
