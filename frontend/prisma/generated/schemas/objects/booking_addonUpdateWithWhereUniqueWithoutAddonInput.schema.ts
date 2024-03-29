import { z } from 'zod'
import { booking_addonWhereUniqueInputObjectSchema } from './booking_addonWhereUniqueInput.schema'
import { booking_addonUpdateWithoutAddonInputObjectSchema } from './booking_addonUpdateWithoutAddonInput.schema'
import { booking_addonUncheckedUpdateWithoutAddonInputObjectSchema } from './booking_addonUncheckedUpdateWithoutAddonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUpdateWithWhereUniqueWithoutAddonInput> =
    z
        .object({
            where: z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(() => booking_addonUpdateWithoutAddonInputObjectSchema),
                z.lazy(
                    () =>
                        booking_addonUncheckedUpdateWithoutAddonInputObjectSchema
                ),
            ]),
        })
        .strict()

export const booking_addonUpdateWithWhereUniqueWithoutAddonInputObjectSchema =
    Schema
