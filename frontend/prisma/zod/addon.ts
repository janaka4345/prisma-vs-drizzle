import * as z from 'zod'

export const AddonModel = z.object({
    addon_name: z.string(),
    Price: z.number(),
})
