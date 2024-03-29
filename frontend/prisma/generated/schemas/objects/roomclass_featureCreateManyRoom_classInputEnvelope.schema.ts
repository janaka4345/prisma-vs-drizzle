import { z } from 'zod'
import { roomclass_featureCreateManyRoom_classInputObjectSchema } from './roomclass_featureCreateManyRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureCreateManyRoom_classInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(
                    () => roomclass_featureCreateManyRoom_classInputObjectSchema
                ),
                z
                    .lazy(
                        () =>
                            roomclass_featureCreateManyRoom_classInputObjectSchema
                    )
                    .array(),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict()

export const roomclass_featureCreateManyRoom_classInputEnvelopeObjectSchema =
    Schema
