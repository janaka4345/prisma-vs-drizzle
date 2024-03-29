import { z } from 'zod'
import { booking_addonCreateNestedManyWithoutAddonInputObjectSchema } from './booking_addonCreateNestedManyWithoutAddonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonCreateInput> = z
    .object({
        id: z.string().optional(),
        addon_name: z.string(),
        Price: z.number(),
        booking_addon: z
            .lazy(
                () => booking_addonCreateNestedManyWithoutAddonInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const AddonCreateInputObjectSchema = Schema
