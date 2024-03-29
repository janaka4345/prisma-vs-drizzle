import { z } from 'zod'
import { roomclass_featureWhereUniqueInputObjectSchema } from './roomclass_featureWhereUniqueInput.schema'
import { roomclass_featureUpdateWithoutFeatureInputObjectSchema } from './roomclass_featureUpdateWithoutFeatureInput.schema'
import { roomclass_featureUncheckedUpdateWithoutFeatureInputObjectSchema } from './roomclass_featureUncheckedUpdateWithoutFeatureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUpdateWithWhereUniqueWithoutFeatureInput> =
    z
        .object({
            where: z.lazy(() => roomclass_featureWhereUniqueInputObjectSchema),
            data: z.union([
                z.lazy(
                    () => roomclass_featureUpdateWithoutFeatureInputObjectSchema
                ),
                z.lazy(
                    () =>
                        roomclass_featureUncheckedUpdateWithoutFeatureInputObjectSchema
                ),
            ]),
        })
        .strict()

export const roomclass_featureUpdateWithWhereUniqueWithoutFeatureInputObjectSchema =
    Schema
