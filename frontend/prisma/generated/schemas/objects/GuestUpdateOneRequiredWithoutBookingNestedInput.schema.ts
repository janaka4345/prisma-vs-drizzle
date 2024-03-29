import { z } from 'zod'
import { GuestCreateWithoutBookingInputObjectSchema } from './GuestCreateWithoutBookingInput.schema'
import { GuestUncheckedCreateWithoutBookingInputObjectSchema } from './GuestUncheckedCreateWithoutBookingInput.schema'
import { GuestCreateOrConnectWithoutBookingInputObjectSchema } from './GuestCreateOrConnectWithoutBookingInput.schema'
import { GuestUpsertWithoutBookingInputObjectSchema } from './GuestUpsertWithoutBookingInput.schema'
import { GuestWhereUniqueInputObjectSchema } from './GuestWhereUniqueInput.schema'
import { GuestUpdateWithoutBookingInputObjectSchema } from './GuestUpdateWithoutBookingInput.schema'
import { GuestUncheckedUpdateWithoutBookingInputObjectSchema } from './GuestUncheckedUpdateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.GuestUpdateOneRequiredWithoutBookingNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => GuestCreateWithoutBookingInputObjectSchema),
                    z.lazy(
                        () =>
                            GuestUncheckedCreateWithoutBookingInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(() => GuestCreateOrConnectWithoutBookingInputObjectSchema)
                .optional(),
            upsert: z
                .lazy(() => GuestUpsertWithoutBookingInputObjectSchema)
                .optional(),
            connect: z.lazy(() => GuestWhereUniqueInputObjectSchema).optional(),
            update: z
                .union([
                    z.lazy(() => GuestUpdateWithoutBookingInputObjectSchema),
                    z.lazy(
                        () =>
                            GuestUncheckedUpdateWithoutBookingInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const GuestUpdateOneRequiredWithoutBookingNestedInputObjectSchema =
    Schema
