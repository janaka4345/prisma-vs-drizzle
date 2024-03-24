'use server'
import { faker } from '@faker-js/faker'
import prisma from '../../utils/prismaClient'

export default async function createGuest() {
    try {
        const data = await prisma.guest.create({
            data: {
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                phone_no: faker.phone.number(),
                // Booking:{
                //     create:[
                //         {
                //          checkin_date:faker.date.anytime() ,
                //         }
                //     ]
                // }
            },
        })
        return { message: 'success' }
    } catch (error) {
        console.log(error)
        return { error: error.message }
    }
}
