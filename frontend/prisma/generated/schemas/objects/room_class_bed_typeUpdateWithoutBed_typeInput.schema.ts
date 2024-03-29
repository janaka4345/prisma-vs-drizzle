import { z } from 'zod'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { Room_classUpdateOneRequiredWithoutRoom_class_bed_typeNestedInputObjectSchema } from './Room_classUpdateOneRequiredWithoutRoom_class_bed_typeNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.room_class_bed_typeUpdateWithoutBed_typeInput> =
    z
        .object({
            num_of_beds: z
                .union([
                    z.number(),
                    z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            room_class: z
                .lazy(
                    () =>
                        Room_classUpdateOneRequiredWithoutRoom_class_bed_typeNestedInputObjectSchema
                )
                .optional(),
        })
        .strict()

export const room_class_bed_typeUpdateWithoutBed_typeInputObjectSchema = Schema
