'use server'
import { faker } from '@faker-js/faker'
import prisma from '../../utils/prismaClient'

export default async function createBooking() {
    try {
        const data = await prisma.booking.create({
            data: {
                guestId: '90453d28-57af-48c5-80e6-8f20f033db28',
                num_adults: 10,
                num_children: 0,
                booking_amount: 140.25,
                checkin_date: new Date(),
                checkout_date: new Date(),
            },
        })
        return { message: 'success' }
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
}
