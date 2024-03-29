import { z } from 'zod'
import { GuestCreateWithoutBookingInputObjectSchema } from './GuestCreateWithoutBookingInput.schema'
import { GuestUncheckedCreateWithoutBookingInputObjectSchema } from './GuestUncheckedCreateWithoutBookingInput.schema'
import { GuestCreateOrConnectWithoutBookingInputObjectSchema } from './GuestCreateOrConnectWithoutBookingInput.schema'
import { GuestWhereUniqueInputObjectSchema } from './GuestWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestCreateNestedOneWithoutBookingInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => GuestCreateWithoutBookingInputObjectSchema),
                z.lazy(
                    () => GuestUncheckedCreateWithoutBookingInputObjectSchema
                ),
            ])
            .optional(),
        connectOrCreate: z
            .lazy(() => GuestCreateOrConnectWithoutBookingInputObjectSchema)
            .optional(),
        connect: z.lazy(() => GuestWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const GuestCreateNestedOneWithoutBookingInputObjectSchema = Schema
