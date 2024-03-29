import { z } from 'zod'
import { AddonCreateWithoutBooking_addonInputObjectSchema } from './AddonCreateWithoutBooking_addonInput.schema'
import { AddonUncheckedCreateWithoutBooking_addonInputObjectSchema } from './AddonUncheckedCreateWithoutBooking_addonInput.schema'
import { AddonCreateOrConnectWithoutBooking_addonInputObjectSchema } from './AddonCreateOrConnectWithoutBooking_addonInput.schema'
import { AddonWhereUniqueInputObjectSchema } from './AddonWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonCreateNestedOneWithoutBooking_addonInput> =
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
            connect: z.lazy(() => AddonWhereUniqueInputObjectSchema).optional(),
        })
        .strict()

export const AddonCreateNestedOneWithoutBooking_addonInputObjectSchema = Schema
