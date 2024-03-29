import { z } from 'zod'
import { booking_addonCreateWithoutAddonInputObjectSchema } from './booking_addonCreateWithoutAddonInput.schema'
import { booking_addonUncheckedCreateWithoutAddonInputObjectSchema } from './booking_addonUncheckedCreateWithoutAddonInput.schema'
import { booking_addonCreateOrConnectWithoutAddonInputObjectSchema } from './booking_addonCreateOrConnectWithoutAddonInput.schema'
import { booking_addonUpsertWithWhereUniqueWithoutAddonInputObjectSchema } from './booking_addonUpsertWithWhereUniqueWithoutAddonInput.schema'
import { booking_addonCreateManyAddonInputEnvelopeObjectSchema } from './booking_addonCreateManyAddonInputEnvelope.schema'
import { booking_addonWhereUniqueInputObjectSchema } from './booking_addonWhereUniqueInput.schema'
import { booking_addonUpdateWithWhereUniqueWithoutAddonInputObjectSchema } from './booking_addonUpdateWithWhereUniqueWithoutAddonInput.schema'
import { booking_addonUpdateManyWithWhereWithoutAddonInputObjectSchema } from './booking_addonUpdateManyWithWhereWithoutAddonInput.schema'
import { booking_addonScalarWhereInputObjectSchema } from './booking_addonScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_addonUncheckedUpdateManyWithoutAddonNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(
                        () =>
                            booking_addonUpsertWithWhereUniqueWithoutAddonInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonUpsertWithWhereUniqueWithoutAddonInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            createMany: z
                .lazy(
                    () => booking_addonCreateManyAddonInputEnvelopeObjectSchema
                )
                .optional(),
            set: z
                .union([
                    z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_addonWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_addonWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_addonWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => booking_addonWhereUniqueInputObjectSchema),
                    z
                        .lazy(() => booking_addonWhereUniqueInputObjectSchema)
                        .array(),
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(
                        () =>
                            booking_addonUpdateWithWhereUniqueWithoutAddonInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonUpdateWithWhereUniqueWithoutAddonInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(
                        () =>
                            booking_addonUpdateManyWithWhereWithoutAddonInputObjectSchema
                    ),
                    z
                        .lazy(
                            () =>
                                booking_addonUpdateManyWithWhereWithoutAddonInputObjectSchema
                        )
                        .array(),
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => booking_addonScalarWhereInputObjectSchema),
                    z
                        .lazy(() => booking_addonScalarWhereInputObjectSchema)
                        .array(),
                ])
                .optional(),
        })
        .strict()

export const booking_addonUncheckedUpdateManyWithoutAddonNestedInputObjectSchema =
    Schema
