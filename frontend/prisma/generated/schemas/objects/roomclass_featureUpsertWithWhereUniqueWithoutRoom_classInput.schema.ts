import { z } from 'zod'
import { roomclass_featureWhereUniqueInputObjectSchema } from './roomclass_featureWhereUniqueInput.schema'
import { roomclass_featureUpdateWithoutRoom_classInputObjectSchema } from './roomclass_featureUpdateWithoutRoom_classInput.schema'
import { roomclass_featureUncheckedUpdateWithoutRoom_classInputObjectSchema } from './roomclass_featureUncheckedUpdateWithoutRoom_classInput.schema'
import { roomclass_featureCreateWithoutRoom_classInputObjectSchema } from './roomclass_featureCreateWithoutRoom_classInput.schema'
import { roomclass_featureUncheckedCreateWithoutRoom_classInputObjectSchema } from './roomclass_featureUncheckedCreateWithoutRoom_classInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.roomclass_featureUpsertWithWhereUniqueWithoutRoom_classInput> =
    z
        .object({
            where: z.lazy(() => roomclass_featureWhereUniqueInputObjectSchema),
            update: z.union([
                z.lazy(
                    () =>
                        roomclass_featureUpdateWithoutRoom_classInputObjectSchema
                ),
                z.lazy(
                    () =>
                        roomclass_featureUncheckedUpdateWithoutRoom_classInputObjectSchema
                ),
            ]),
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

export const roomclass_featureUpsertWithWhereUniqueWithoutRoom_classInputObjectSchema =
    Schema
