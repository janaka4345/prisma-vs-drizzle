import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { roomclass_featureUncheckedUpdateManyWithoutFeatureNestedInputObjectSchema } from './roomclass_featureUncheckedUpdateManyWithoutFeatureNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.FeatureUncheckedUpdateInput> = z
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
                    roomclass_featureUncheckedUpdateManyWithoutFeatureNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const FeatureUncheckedUpdateInputObjectSchema = Schema
