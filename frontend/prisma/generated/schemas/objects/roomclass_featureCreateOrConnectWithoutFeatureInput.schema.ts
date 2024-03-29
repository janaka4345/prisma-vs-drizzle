import { z } from 'zod'
import { roomclass_featureWhereUniqueInputObjectSchema } from './roomclass_featureWhereUniqueInput.schema'
import { roomclass_featureCreateWithoutFeatureInputObjectSchema } from './roomclass_featureCreateWithoutFeatureInput.schema'
import { roomclass_featureUncheckedCreateWithoutFeatureInputObjectSchema } from './roomclass_featureUncheckedCreateWithoutFeatureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureCreateOrConnectWithoutFeatureInput> =
    z
        .object({
            where: z.lazy(() => roomclass_featureWhereUniqueInputObjectSchema),
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

export const roomclass_featureCreateOrConnectWithoutFeatureInputObjectSchema =
    Schema
