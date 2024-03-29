import { z } from 'zod'
import { GuestWhereUniqueInputObjectSchema } from './GuestWhereUniqueInput.schema'
import { GuestCreateWithoutBookingInputObjectSchema } from './GuestCreateWithoutBookingInput.schema'
import { GuestUncheckedCreateWithoutBookingInputObjectSchema } from './GuestUncheckedCreateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestCreateOrConnectWithoutBookingInput> = z
    .object({
        where: z.lazy(() => GuestWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => GuestCreateWithoutBookingInputObjectSchema),
            z.lazy(() => GuestUncheckedCreateWithoutBookingInputObjectSchema),
        ]),
    })
    .strict()

export const GuestCreateOrConnectWithoutBookingInputObjectSchema = Schema
