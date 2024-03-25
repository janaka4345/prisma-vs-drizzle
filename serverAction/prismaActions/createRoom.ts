'use server'
import { faker } from '@faker-js/faker'
import prisma from '../../utils/prismaClient'

export default async function createRoom() {
    const room = await prisma.room.create({
        data: {
            room_number: 10,
            floor: {
                connectOrCreate: {
                    where: { floor_number: 10 },
                    create: { floor_number: 10 },
                },
            },
            status: {
                connectOrCreate: {
                    where: { status: 'pending' },
                    create: { status: 'pending' },
                },
            },
            room_class: {
                connectOrCreate: {
                    where: { base_price: 100.25 },
                    create: { base_price: 100.25, class_name: 'luxary' },
                },
            },
        },
    })
}
