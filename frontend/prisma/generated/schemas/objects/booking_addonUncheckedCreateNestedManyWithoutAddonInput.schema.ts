import { z } from 'zod'
import { booking_addonCreateWithoutAddonInputObjectSchema } from './booking_addonCreateWithoutAddonInput.schema'
import { booking_addonUncheckedCreateWithoutAddonInputObjectSchema } from './booking_addonUncheckedCreateWithoutAddonInput.schema'
import { booking_addonCreateOrConnectWithoutAddonInputObjectSchema } from './booking_addonCreateOrConnectWithoutAddonInput.schema'
import { booking_addonCreateManyAddonInputEnvelopeObjectSchema } from './booking_addonCreateManyAddonInputEnvelope.schema'
import { booking_addonWhereUniqueInputObjectSchema } from './booking_addonWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUncheckedCreateNestedManyWithoutAddonInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(
                        () => booking_addonCreateWithoutAddonInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonCreateWithoutAddonInputObjectSchema
                        )
                        .array(),
                    z.lazy(
                        () =>
                            booking_addonUncheckedCreateWithoutAddonInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonUncheckedCreateWithoutAddonInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(
                        () =>
                            booking_addonCreateOrConnectWithoutAddonInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonCreateOrConnectWithoutAddonInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () => booking_addonCreateManyAddonInputEnvelopeObjectSchema
                )
                .optional(),
            connect: z
                .union([
                    z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_addonWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
        })
        .strict()

export const booking_addonUncheckedCreateNestedManyWithoutAddonInputObjectSchema =
    Schema
