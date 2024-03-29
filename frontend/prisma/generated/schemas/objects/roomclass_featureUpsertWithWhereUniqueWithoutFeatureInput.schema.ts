import { z } from 'zod'
import { roomclass_featureWhereUniqueInputObjectSchema } from './roomclass_featureWhereUniqueInput.schema'
import { roomclass_featureUpdateWithoutFeatureInputObjectSchema } from './roomclass_featureUpdateWithoutFeatureInput.schema'
import { roomclass_featureUncheckedUpdateWithoutFeatureInputObjectSchema } from './roomclass_featureUncheckedUpdateWithoutFeatureInput.schema'
import { roomclass_featureCreateWithoutFeatureInputObjectSchema } from './roomclass_featureCreateWithoutFeatureInput.schema'
import { roomclass_featureUncheckedCreateWithoutFeatureInputObjectSchema } from './roomclass_featureUncheckedCreateWithoutFeatureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUpsertWithWhereUniqueWithoutFeatureInput> =
    z
        .object({
            where: z.lazy(() => roomclass_featureWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(
                    () => roomclass_featureUpdateWithoutFeatureInputObjectSchema
                ),
                z.lazy(
                    () =>
                        roomclass_featureUncheckedUpdateWithoutFeatureInputObjectSchema
                ),
            ]),
            create: z.union([
                z.lazy(
                    () => roomclass_featureCreateWithoutFeatureInputObjectSchema
                ),
                z.lazy(
                    () =>
                        roomclass_featureUncheckedCreateWithoutFeatureInputObjectSchema
                ),
            ]),
        })
        .strict()

export const roomclass_featureUpsertWithWhereUniqueWithoutFeatureInputObjectSchema =
    Schema
