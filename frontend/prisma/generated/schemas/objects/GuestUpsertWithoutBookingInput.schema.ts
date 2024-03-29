import { z } from 'zod'
import { GuestUpdateWithoutBookingInputObjectSchema } from './GuestUpdateWithoutBookingInput.schema'
import { GuestUncheckedUpdateWithoutBookingInputObjectSchema } from './GuestUncheckedUpdateWithoutBookingInput.schema'
import { GuestCreateWithoutBookingInputObjectSchema } from './GuestCreateWithoutBookingInput.schema'
import { GuestUncheckedCreateWithoutBookingInputObjectSchema } from './GuestUncheckedCreateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestUpsertWithoutBookingInput> = z
    .object({
        update: z.union([
            z.lazy(() => GuestUpdateWithoutBookingInputObjectSchema),
            z.lazy(() => GuestUncheckedUpdateWithoutBookingInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => GuestCreateWithoutBookingInputObjectSchema),
            z.lazy(() => GuestUncheckedCreateWithoutBookingInputObjectSchema),
        ]),
    })
    .strict()

export const GuestUpsertWithoutBookingInputObjectSchema = Schema
