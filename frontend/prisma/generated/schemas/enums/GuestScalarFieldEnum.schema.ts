import { z } from 'zod'

export const GuestScalarFieldEnumSchema = z.enum([
    'id',
    'first_name',
    'last_name',
    'email',
    'phone_no',
])
