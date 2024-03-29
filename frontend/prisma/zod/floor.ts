import * as z from 'zod'

export const FloorModel = z.object({
    floor_number: z.number().int(),
})
