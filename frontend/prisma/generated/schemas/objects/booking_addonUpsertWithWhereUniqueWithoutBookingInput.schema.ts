import { z } from 'zod'
import { booking_addonWhereUniqueInputObjectSchema } from './booking_addonWhereUniqueInput.schema'
import { booking_addonUpdateWithoutBookingInputObjectSchema } from './booking_addonUpdateWithoutBookingInput.schema'
import { booking_addonUncheckedUpdateWithoutBookingInputObjectSchema } from './booking_addonUncheckedUpdateWithoutBookingInput.schema'
import { booking_addonCreateWithoutBookingInputObjectSchema } from './booking_addonCreateWithoutBookingInput.schema'
import { booking_addonUncheckedCreateWithoutBookingInputObjectSchema } from './booking_addonUncheckedCreateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUpsertWithWhereUniqueWithoutBookingInput> =
    z
        .object({
            where: z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(
                    () => booking_addonUpdateWithoutBookingInputObjectSchema
                ),
                z.lazy(
                    () =>
                        booking_addonUncheckedUpdateWithoutBookingInputObjectSchema
                ),
            ]),
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

export const booking_addonUpsertWithWhereUniqueWithoutBookingInputObjectSchema =
    Schema
