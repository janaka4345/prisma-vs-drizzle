import { z } from 'zod'
import { Payment_statusUpdateWithoutBookingInputObjectSchema } from './Payment_statusUpdateWithoutBookingInput.schema'
import { Payment_statusUncheckedUpdateWithoutBookingInputObjectSchema } from './Payment_statusUncheckedUpdateWithoutBookingInput.schema'
import { Payment_statusCreateWithoutBookingInputObjectSchema } from './Payment_statusCreateWithoutBookingInput.schema'
import { Payment_statusUncheckedCreateWithoutBookingInputObjectSchema } from './Payment_statusUncheckedCreateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Payment_statusUpsertWithoutBookingInput> = z
    .object({
        update: z.union([
            z.lazy(() => Payment_statusUpdateWithoutBookingInputObjectSchema),
            z.lazy(
                () =>
                    Payment_statusUncheckedUpdateWithoutBookingInputObjectSchema
            ),
        ]),
        create: z.union([
            z.lazy(() => Payment_statusCreateWithoutBookingInputObjectSchema),
            z.lazy(
                () =>
                    Payment_statusUncheckedCreateWithoutBookingInputObjectSchema
            ),
        ]),
    })
    .strict()

export const Payment_statusUpsertWithoutBookingInputObjectSchema = Schema
