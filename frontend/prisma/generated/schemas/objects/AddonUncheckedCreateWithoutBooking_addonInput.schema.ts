import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonUncheckedCreateWithoutBooking_addonInput> =
    z
        .object({
            id: z.string().optional(),
            addon_name: z.string(),
            Price: z.number(),
        })
        .strict()

export const AddonUncheckedCreateWithoutBooking_addonInputObjectSchema = Schema
