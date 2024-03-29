import { z } from 'zod'

export const BookingScalarFieldEnumSchema = z.enum([
    'id',
    'checkin_date',
    'checkout_date',
    'num_adults',
    'num_children',
    'booking_amount',
    'guestId',
    'payment_statusId',
])
