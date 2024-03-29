import { z } from 'zod'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingUpdateWithoutGuestInputObjectSchema } from './BookingUpdateWithoutGuestInput.schema'
import { BookingUncheckedUpdateWithoutGuestInputObjectSchema } from './BookingUncheckedUpdateWithoutGuestInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutGuestInput> =
    z
        .object({
            where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(() => BookingUpdateWithoutGuestInputObjectSchema),
                z.lazy(
                    () => BookingUncheckedUpdateWithoutGuestInputObjectSchema
                ),
            ]),
        })
        .strict()

export const BookingUpdateWithWhereUniqueWithoutGuestInputObjectSchema = Schema
