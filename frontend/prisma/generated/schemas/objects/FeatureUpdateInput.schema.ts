import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { roomclass_featureUpdateManyWithoutFeatureNestedInputObjectSchema } from './roomclass_featureUpdateManyWithoutFeatureNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureUpdateInput> = z
    .object({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        feature_name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        roomclass_feature: z
            .lazy(
                () =>
                    roomclass_featureUpdateManyWithoutFeatureNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const FeatureUpdateInputObjectSchema = Schema
