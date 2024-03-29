import * as z from 'zod'

export const Room_classModel = z.object({
    class_name: z.string(),
    base_price: z.number(),
})
