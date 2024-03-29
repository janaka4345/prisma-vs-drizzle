import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.booking_roomUncheckedUpdateManyWithoutBooking_roomInput> =
    z
        .object({
            roomId: z
                .union([
                    z.string(),
                    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
        })
        .strict()

export const booking_roomUncheckedUpdateManyWithoutBooking_roomInputObjectSchema =
    Schema
