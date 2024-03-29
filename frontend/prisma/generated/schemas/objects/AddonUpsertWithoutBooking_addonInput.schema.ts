import { z } from 'zod'
import { AddonUpdateWithoutBooking_addonInputObjectSchema } from './AddonUpdateWithoutBooking_addonInput.schema'
import { AddonUncheckedUpdateWithoutBooking_addonInputObjectSchema } from './AddonUncheckedUpdateWithoutBooking_addonInput.schema'
import { AddonCreateWithoutBooking_addonInputObjectSchema } from './AddonCreateWithoutBooking_addonInput.schema'
import { AddonUncheckedCreateWithoutBooking_addonInputObjectSchema } from './AddonUncheckedCreateWithoutBooking_addonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonUpsertWithoutBooking_addonInput> = z
    .object({
        update: z.union([
            z.lazy(() => AddonUpdateWithoutBooking_addonInputObjectSchema),
            z.lazy(
                () => AddonUncheckedUpdateWithoutBooking_addonInputObjectSchema
            ),
        ]),
        create: z.union([
            z.lazy(() => AddonCreateWithoutBooking_addonInputObjectSchema),
            z.lazy(
                () => AddonUncheckedCreateWithoutBooking_addonInputObjectSchema
            ),
        ]),
    })
    .strict()

export const AddonUpsertWithoutBooking_addonInputObjectSchema = Schema
