import { z } from 'zod'
import { roomclass_featureScalarWhereInputObjectSchema } from './roomclass_featureScalarWhereInput.schema'
import { roomclass_featureUpdateManyMutationInputObjectSchema } from './roomclass_featureUpdateManyMutationInput.schema'
import { roomclass_featureUncheckedUpdateManyWithoutRoomclass_featureInputObjectSchema } from './roomclass_featureUncheckedUpdateManyWithoutRoomclass_featureInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUpdateManyWithWhereWithoutFeatureInput> =
    z
        .object({
            where: z.lazy(() => roomclass_featureScalarWhereInputObjectSchema),
            data: z.union([
                z.lazy(
                    () => roomclass_featureUpdateManyMutationInputObjectSchema
                ),
                z.lazy(
                    () =>
                        roomclass_featureUncheckedUpdateManyWithoutRoomclass_featureInputObjectSchema
                ),
            ]),
        })
        .strict()

export const roomclass_featureUpdateManyWithWhereWithoutFeatureInputObjectSchema =
    Schema
