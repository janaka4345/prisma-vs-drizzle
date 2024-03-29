import { z } from 'zod'
import { booking_addonWhereUniqueInputObjectSchema } from './booking_addonWhereUniqueInput.schema'
import { booking_addonCreateWithoutBookingInputObjectSchema } from './booking_addonCreateWithoutBookingInput.schema'
import { booking_addonUncheckedCreateWithoutBookingInputObjectSchema } from './booking_addonUncheckedCreateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonCreateOrConnectWithoutBookingInput> =
    z
        .object({
            where: z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(
                    () => booking_addonCreateWithoutBookingInputObjectSchema
                ),
                z.lazy(
                    () =>
                        booking_addonUncheckedCreateWithoutBookingInputObjectSchema
                ),
            ]),
        })
        .strict()

export const booking_addonCreateOrConnectWithoutBookingInputObjectSchema =
    Schema
