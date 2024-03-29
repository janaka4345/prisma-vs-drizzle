import { z } from 'zod'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { Bed_typeUpdateOneRequiredWithoutRoom_class_bed_typeNestedInputObjectSchema } from './Bed_typeUpdateOneRequiredWithoutRoom_class_bed_typeNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeUpdateWithoutRoom_classInput> =
    z
        .object({
            num_of_beds: z
                .union([
                    z.number(),
                    z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            bed_type: z
                .lazy(
                    () =>
                        Bed_typeUpdateOneRequiredWithoutRoom_class_bed_typeNestedInputObjectSchema
                )
                .optional(),
        })
        .strict()

export const room_class_bed_typeUpdateWithoutRoom_classInputObjectSchema =
    Schema
