import { z } from 'zod'
import { booking_addonWhereUniqueInputObjectSchema } from './booking_addonWhereUniqueInput.schema'
import { booking_addonUpdateWithoutBookingInputObjectSchema } from './booking_addonUpdateWithoutBookingInput.schema'
import { booking_addonUncheckedUpdateWithoutBookingInputObjectSchema } from './booking_addonUncheckedUpdateWithoutBookingInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUpdateWithWhereUniqueWithoutBookingInput> =
    z
        .object({
            where: z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(
                    () => booking_addonUpdateWithoutBookingInputObjectSchema
                ),
                z.lazy(
                    () =>
                        booking_addonUncheckedUpdateWithoutBookingInputObjectSchema
                ),
            ]),
        })
        .strict()

export const booking_addonUpdateWithWhereUniqueWithoutBookingInputObjectSchema =
    Schema
