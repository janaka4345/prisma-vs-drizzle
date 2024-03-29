import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema'
import { booking_addonUncheckedUpdateManyWithoutAddonNestedInputObjectSchema } from './booking_addonUncheckedUpdateManyWithoutAddonNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AddonUncheckedUpdateInput> = z
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
                () =>
                    booking_addonUncheckedUpdateManyWithoutAddonNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const AddonUncheckedUpdateInputObjectSchema = Schema
