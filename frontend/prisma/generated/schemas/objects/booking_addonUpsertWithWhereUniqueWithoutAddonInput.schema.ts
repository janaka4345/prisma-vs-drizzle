import { z } from 'zod'
import { booking_addonWhereUniqueInputObjectSchema } from './booking_addonWhereUniqueInput.schema'
import { booking_addonUpdateWithoutAddonInputObjectSchema } from './booking_addonUpdateWithoutAddonInput.schema'
import { booking_addonUncheckedUpdateWithoutAddonInputObjectSchema } from './booking_addonUncheckedUpdateWithoutAddonInput.schema'
import { booking_addonCreateWithoutAddonInputObjectSchema } from './booking_addonCreateWithoutAddonInput.schema'
import { booking_addonUncheckedCreateWithoutAddonInputObjectSchema } from './booking_addonUncheckedCreateWithoutAddonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUpsertWithWhereUniqueWithoutAddonInput> =
    z
        .object({
            where: z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(() => booking_addonUpdateWithoutAddonInputObjectSchema),
                z.lazy(
                    () =>
                        booking_addonUncheckedUpdateWithoutAddonInputObjectSchema
                ),
            ]),
            create: z.union([
                z.lazy(() => booking_addonCreateWithoutAddonInputObjectSchema),
                z.lazy(
                    () =>
                        booking_addonUncheckedCreateWithoutAddonInputObjectSchema
                ),
            ]),
        })
        .strict()

export const booking_addonUpsertWithWhereUniqueWithoutAddonInputObjectSchema =
    Schema
