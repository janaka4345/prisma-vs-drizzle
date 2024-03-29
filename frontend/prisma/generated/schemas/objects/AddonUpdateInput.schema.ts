import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { booking_addonUpdateManyWithoutAddonNestedInputObjectSchema } from './booking_addonUpdateManyWithoutAddonNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonUpdateInput> = z
    .object({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        addon_name: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        Price: z
            .union([
                z.number(),
                z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        booking_addon: z
            .lazy(
                () => booking_addonUpdateManyWithoutAddonNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const AddonUpdateInputObjectSchema = Schema
