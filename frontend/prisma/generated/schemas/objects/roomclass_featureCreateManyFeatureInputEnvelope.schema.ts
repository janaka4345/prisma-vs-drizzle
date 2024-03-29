import { z } from 'zod'
import { roomclass_featureCreateManyFeatureInputObjectSchema } from './roomclass_featureCreateManyFeatureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureCreateManyFeatureInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(
                    () => roomclass_featureCreateManyFeatureInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            roomclass_featureCreateManyFeatureInputObjectSchema
                    )
                    .array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict()

export const roomclass_featureCreateManyFeatureInputEnvelopeObjectSchema =
    Schema
