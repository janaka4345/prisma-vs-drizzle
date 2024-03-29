import { z } from 'zod'
import { AddonWhereUniqueInputObjectSchema } from './AddonWhereUniqueInput.schema'
import { AddonCreateWithoutBooking_addonInputObjectSchema } from './AddonCreateWithoutBooking_addonInput.schema'
import { AddonUncheckedCreateWithoutBooking_addonInputObjectSchema } from './AddonUncheckedCreateWithoutBooking_addonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonCreateOrConnectWithoutBooking_addonInput> =
    z
        .object({
            where: z.lazy(() => AddonWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(() => AddonCreateWithoutBooking_addonInputObjectSchema),
                z.lazy(
                    () =>
                        AddonUncheckedCreateWithoutBooking_addonInputObjectSchema
                ),
            ]),
        })
        .strict()

export const AddonCreateOrConnectWithoutBooking_addonInputObjectSchema = Schema
