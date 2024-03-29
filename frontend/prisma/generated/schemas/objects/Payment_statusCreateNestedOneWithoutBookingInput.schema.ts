import { z } from 'zod'
import { Payment_statusCreateWithoutBookingInputObjectSchema } from './Payment_statusCreateWithoutBookingInput.schema'
import { Payment_statusUncheckedCreateWithoutBookingInputObjectSchema } from './Payment_statusUncheckedCreateWithoutBookingInput.schema'
import { Payment_statusCreateOrConnectWithoutBookingInputObjectSchema } from './Payment_statusCreateOrConnectWithoutBookingInput.schema'
import { Payment_statusWhereUniqueInputObjectSchema } from './Payment_statusWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusCreateNestedOneWithoutBookingInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () =>
                            Payment_statusCreateWithoutBookingInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            Payment_statusUncheckedCreateWithoutBookingInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        Payment_statusCreateOrConnectWithoutBookingInputObjectSchema
                )
                .optional(),
            connect: z
                .lazy(() => Payment_statusWhereUniqueInputObjectSchema)
                .optional(),
        })
        .strict()

export const Payment_statusCreateNestedOneWithoutBookingInputObjectSchema =
    Schema
