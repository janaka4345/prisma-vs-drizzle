import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { room_class_bed_typeUpdateManyWithoutBed_typeNestedInputObjectSchema } from './room_class_bed_typeUpdateManyWithoutBed_typeNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeUpdateInput> = z
    .object({
        id: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        bed_type: z
            .union([
                z.string(),
                z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
            ])
            .optional(),
        room_class_bed_type: z
            .lazy(
                () =>
                    room_class_bed_typeUpdateManyWithoutBed_typeNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Bed_typeUpdateInputObjectSchema = Schema
