import { z } from 'zod'
import { booking_addonUncheckedCreateNestedManyWithoutAddonInputObjectSchema } from './booking_addonUncheckedCreateNestedManyWithoutAddonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonUncheckedCreateInput> = z
    .object({
        id: z.string().optional(),
        addon_name: z.string(),
        Price: z.number(),
        booking_addon: z
            .lazy(
                () =>
                    booking_addonUncheckedCreateNestedManyWithoutAddonInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const AddonUncheckedCreateInputObjectSchema = Schema
