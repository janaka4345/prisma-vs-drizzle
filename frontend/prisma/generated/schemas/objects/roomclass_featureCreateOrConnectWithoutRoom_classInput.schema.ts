import { z } from 'zod'
import { roomclass_featureWhereUniqueInputObjectSchema } from './roomclass_featureWhereUniqueInput.schema'
import { roomclass_featureCreateWithoutRoom_classInputObjectSchema } from './roomclass_featureCreateWithoutRoom_classInput.schema'
import { roomclass_featureUncheckedCreateWithoutRoom_classInputObjectSchema } from './roomclass_featureUncheckedCreateWithoutRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureCreateOrConnectWithoutRoom_classInput> =
    z
        .object({
            where: z.lazy(() => roomclass_featureWhereUniqueInputObjectSchema),
            create: z.union([
                z.lazy(
                    () =>
                        roomclass_featureCreateWithoutRoom_classInputObjectSchema
                ),
                z.lazy(
                    () =>
                        roomclass_featureUncheckedCreateWithoutRoom_classInputObjectSchema
                ),
            ]),
        })
        .strict()

export const roomclass_featureCreateOrConnectWithoutRoom_classInputObjectSchema =
    Schema
