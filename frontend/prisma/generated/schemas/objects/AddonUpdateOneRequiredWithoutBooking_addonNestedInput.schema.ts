import { z } from 'zod'
import { AddonCreateWithoutBooking_addonInputObjectSchema } from './AddonCreateWithoutBooking_addonInput.schema'
import { AddonUncheckedCreateWithoutBooking_addonInputObjectSchema } from './AddonUncheckedCreateWithoutBooking_addonInput.schema'
import { AddonCreateOrConnectWithoutBooking_addonInputObjectSchema } from './AddonCreateOrConnectWithoutBooking_addonInput.schema'
import { AddonUpsertWithoutBooking_addonInputObjectSchema } from './AddonUpsertWithoutBooking_addonInput.schema'
import { AddonWhereUniqueInputObjectSchema } from './AddonWhereUniqueInput.schema'
import { AddonUpdateWithoutBooking_addonInputObjectSchema } from './AddonUpdateWithoutBooking_addonInput.schema'
import { AddonUncheckedUpdateWithoutBooking_addonInputObjectSchema } from './AddonUncheckedUpdateWithoutBooking_addonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonUpdateOneRequiredWithoutBooking_addonNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => AddonCreateWithoutBooking_addonInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            AddonUncheckedCreateWithoutBooking_addonInputObjectSchema
                    ),
                ])
                .optional(),
            connectOrCreate: z
                .lazy(
                    () =>
                        AddonCreateOrConnectWithoutBooking_addonInputObjectSchema
                )
                .optional(),
            upsert: z
                .lazy(() => AddonUpsertWithoutBooking_addonInputObjectSchema)
                .optional(),
            connect: z.lazy(() => AddonWhereUniqueInputObjectSchema).optional(),
            update: z
                .union([
                    z.lazy(
                        () => AddonUpdateWithoutBooking_addonInputObjectSchema
                    ),
                    z.lazy(
                        () =>
                            AddonUncheckedUpdateWithoutBooking_addonInputObjectSchema
                    ),
                ])
                .optional(),
        })
        .strict()

export const AddonUpdateOneRequiredWithoutBooking_addonNestedInputObjectSchema =
    Schema
