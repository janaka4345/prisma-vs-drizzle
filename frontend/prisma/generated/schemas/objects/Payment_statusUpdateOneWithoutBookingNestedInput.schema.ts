import { z } from 'zod'
import { Payment_statusCreateWithoutBookingInputObjectSchema } from './Payment_statusCreateWithoutBookingInput.schema'
import { Payment_statusUncheckedCreateWithoutBookingInputObjectSchema } from './Payment_statusUncheckedCreateWithoutBookingInput.schema'
import { Payment_statusCreateOrConnectWithoutBookingInputObjectSchema } from './Payment_statusCreateOrConnectWithoutBookingInput.schema'
import { Payment_statusUpsertWithoutBookingInputObjectSchema } from './Payment_statusUpsertWithoutBookingInput.schema'
import { Payment_statusWhereUniqueInputObjectSchema } from './Payment_statusWhereUniqueInput.schema'
import { Payment_statusUpdateWithoutBookingInputObjectSchema } from './Payment_statusUpdateWithoutBookingInput.schema'
import { Payment_statusUncheckedUpdateWithoutBookingInputObjectSchema } from './Payment_statusUncheckedUpdateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusUpdateOneWithoutBookingNestedInput> =
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
            upsert: z
                .lazy(() => Payment_statusUpsertWithoutBookingInputObjectSchema)
                .optional(),
            disconnect: z.boolean().optional(),
            delete: z.boolean().optional(),
            connect: z
                .lazy(() => Payment_statusWhereUniqueInputObjectSchema)
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            Payment_statusUpdateWithoutBookingInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            Payment_statusUncheckedUpdateWithoutBookingInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const Payment_statusUpdateOneWithoutBookingNestedInputObjectSchema =
    Schema
