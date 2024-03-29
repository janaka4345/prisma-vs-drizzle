import { z } from 'zod'
import { RoomWhereUniqueInputObjectSchema } from './RoomWhereUniqueInput.schema'
import { RoomUpdateWithoutStatusInputObjectSchema } from './RoomUpdateWithoutStatusInput.schema'
import { RoomUncheckedUpdateWithoutStatusInputObjectSchema } from './RoomUncheckedUpdateWithoutStatusInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpdateWithWhereUniqueWithoutStatusInput> = z
    .object({
        where: z.lazy(() => RoomWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => RoomUpdateWithoutStatusInputObjectSchema),
            z.lazy(() => RoomUncheckedUpdateWithoutStatusInputObjectSchema),
        ]),
    })
    .strict()

export const RoomUpdateWithWhereUniqueWithoutStatusInputObjectSchema = Schema
