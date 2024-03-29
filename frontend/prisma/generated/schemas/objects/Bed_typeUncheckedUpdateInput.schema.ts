import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { room_class_bed_typeUncheckedUpdateManyWithoutBed_typeNestedInputObjectSchema } from './room_class_bed_typeUncheckedUpdateManyWithoutBed_typeNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Bed_typeUncheckedUpdateInput> = z
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
                    room_class_bed_typeUncheckedUpdateManyWithoutBed_typeNestedInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Bed_typeUncheckedUpdateInputObjectSchema = Schema
