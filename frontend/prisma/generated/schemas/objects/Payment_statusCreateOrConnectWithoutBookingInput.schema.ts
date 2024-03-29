import { z } from 'zod'
import { Payment_statusWhereUniqueInputObjectSchema } from './Payment_statusWhereUniqueInput.schema'
import { Payment_statusCreateWithoutBookingInputObjectSchema } from './Payment_statusCreateWithoutBookingInput.schema'
import { Payment_statusUncheckedCreateWithoutBookingInputObjectSchema } from './Payment_statusUncheckedCreateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusCreateOrConnectWithoutBookingInput> =
    z
        .object({
            where: z.lazy(() => Payment_statusWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(
                    () => Payment_statusCreateWithoutBookingInputObjectSchema
                ),
                z.lazy(
                    () =>
                        Payment_statusUncheckedCreateWithoutBookingInputObjectSchema
                ),
            ]),
        })
        .strict()

export const Payment_statusCreateOrConnectWithoutBookingInputObjectSchema =
    Schema
