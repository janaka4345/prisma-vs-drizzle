import { z } from 'zod'
import { booking_addonCreateManyAddonInputObjectSchema } from './booking_addonCreateManyAddonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonCreateManyAddonInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => booking_addonCreateManyAddonInputObjectSchema),
            z.lazy(() => booking_addonCreateManyAddonInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict()

export const booking_addonCreateManyAddonInputEnvelopeObjectSchema = Schema
