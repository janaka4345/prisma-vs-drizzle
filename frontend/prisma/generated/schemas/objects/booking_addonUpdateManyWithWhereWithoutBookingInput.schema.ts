import { z } from 'zod'
import { booking_addonScalarWhereInputObjectSchema } from './booking_addonScalarWhereInput.schema'
import { booking_addonUpdateManyMutationInputObjectSchema } from './booking_addonUpdateManyMutationInput.schema'
import { booking_addonUncheckedUpdateManyWithoutBooking_addonInputObjectSchema } from './booking_addonUncheckedUpdateManyWithoutBooking_addonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUpdateManyWithWhereWithoutBookingInput> =
    z
        .object({
            where: z.lazy(() => booking_addonScalarWhereInputObjectSchema),
            data: z.union([
                z.lazy(() => booking_addonUpdateManyMutationInputObjectSchema),
                z.lazy(
                    () =>
                        booking_addonUncheckedUpdateManyWithoutBooking_addonInputObjectSchema
                ),
            ]),
        })
        .strict()

export const booking_addonUpdateManyWithWhereWithoutBookingInputObjectSchema =
    Schema
