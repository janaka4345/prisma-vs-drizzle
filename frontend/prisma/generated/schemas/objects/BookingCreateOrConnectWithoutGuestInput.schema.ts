import { z } from 'zod'
import { BookingWhereUniqueInputObjectSchema } from './BookingWhereUniqueInput.schema'
import { BookingCreateWithoutGuestInputObjectSchema } from './BookingCreateWithoutGuestInput.schema'
import { BookingUncheckedCreateWithoutGuestInputObjectSchema } from './BookingUncheckedCreateWithoutGuestInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.BookingCreateOrConnectWithoutGuestInput> = z
    .object({
        where: z.lazy(() => BookingWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => BookingCreateWithoutGuestInputObjectSchema),
            z.lazy(() => BookingUncheckedCreateWithoutGuestInputObjectSchema),
        ]),
    })
    .strict()

export const BookingCreateOrConnectWithoutGuestInputObjectSchema = Schema
