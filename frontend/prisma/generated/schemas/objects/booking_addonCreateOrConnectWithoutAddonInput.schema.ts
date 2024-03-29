import { z } from 'zod'
import { booking_addonWhereUniqueInputObjectSchema } from './booking_addonWhereUniqueInput.schema'
import { booking_addonCreateWithoutAddonInputObjectSchema } from './booking_addonCreateWithoutAddonInput.schema'
import { booking_addonUncheckedCreateWithoutAddonInputObjectSchema } from './booking_addonUncheckedCreateWithoutAddonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonCreateOrConnectWithoutAddonInput> =
    z
        .object({
            where: z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(() => booking_addonCreateWithoutAddonInputObjectSchema),
                z.lazy(
                    () =>
                        booking_addonUncheckedCreateWithoutAddonInputObjectSchema
                ),
            ]),
        })
        .strict()

export const booking_addonCreateOrConnectWithoutAddonInputObjectSchema = Schema
