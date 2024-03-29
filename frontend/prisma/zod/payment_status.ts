import * as z from 'zod'

export const Payment_statusModel = z.object({
    status: z.string(),
})
