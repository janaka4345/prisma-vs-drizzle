import { z } from 'zod'
import { booking_addonAddonIdBookingIdCompoundUniqueInputObjectSchema } from './booking_addonAddonIdBookingIdCompoundUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonWhereUniqueInput> = z
    .object({
        addonId_bookingId: z
            .lazy(
                () =>
                    booking_addonAddonIdBookingIdCompoundUniqueInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const booking_addonWhereUniqueInputObjectSchema = Schema
