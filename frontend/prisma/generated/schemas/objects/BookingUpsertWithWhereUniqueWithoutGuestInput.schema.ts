import { z } from 'zod'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingUpdateWithoutGuestInputObjectSchema } from './BookingUpdateWithoutGuestInput.schema'
import { BookingUncheckedUpdateWithoutGuestInputObjectSchema } from './BookingUncheckedUpdateWithoutGuestInput.schema'
import { BookingCreateWithoutGuestInputObjectSchema } from './BookingCreateWithoutGuestInput.schema'
import { BookingUncheckedCreateWithoutGuestInputObjectSchema } from './BookingUncheckedCreateWithoutGuestInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutGuestInput> =
    z
        .object({
            where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(() => BookingUpdateWithoutGuestInputObjectSchema),
                z.lazy(
                    () => BookingUncheckedUpdateWithoutGuestInputObjectSchema
                ),
            ]),
            create: z.union([
                z.lazy(() => BookingCreateWithoutGuestInputObjectSchema),
                z.lazy(
                    () => BookingUncheckedCreateWithoutGuestInputObjectSchema
                ),
            ]),
        })
        .strict()

export const BookingUpsertWithWhereUniqueWithoutGuestInputObjectSchema = Schema
