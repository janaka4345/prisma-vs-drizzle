import { z } from 'zod'
import { RoomUncheckedCreateNestedManyWithoutStatusInputObjectSchema } from './RoomUncheckedCreateNestedManyWithoutStatusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.Room_statusUncheckedCreateInput> = z
    .object({
        id: z.string().optional(),
        status: z.string(),
        Room: z
            .lazy(
                () =>
                    RoomUncheckedCreateNestedManyWithoutStatusInputObjectSchema
            )
            .optional(),
    })
    .strict()

export const Room_statusUncheckedCreateInputObjectSchema = Schema
