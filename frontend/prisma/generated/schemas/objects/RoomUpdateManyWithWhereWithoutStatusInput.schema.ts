import { z } from 'zod'
import { RoomScalarWhereInputObjectSchema } from './RoomScalarWhereInput.schema'
import { RoomUpdateManyMutationInputObjectSchema } from './RoomUpdateManyMutationInput.schema'
import { RoomUncheckedUpdateManyWithoutRoomInputObjectSchema } from './RoomUncheckedUpdateManyWithoutRoomInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RoomUpdateManyWithWhereWithoutStatusInput> = z
    .object({
        where: z.lazy(() => RoomScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => RoomUpdateManyMutationInputObjectSchema),
            z.lazy(() => RoomUncheckedUpdateManyWithoutRoomInputObjectSchema),
        ]),
    })
    .strict()

export const RoomUpdateManyWithWhereWithoutStatusInputObjectSchema = Schema
