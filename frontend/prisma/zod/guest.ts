import * as z from "zod"

export const GuestModel = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone_no: z.string().nullish(),
})
