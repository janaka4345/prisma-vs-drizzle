'use server'

import prisma from "@/utils/prismaClient"

export default async function createUser() {
    try {
        await prisma.user.create({
            data: {
                name: 'Alice',
                email: 'alkihce@prisma.io',
                posts: {
                    create: { title: 'Hello World' },
                },
                profile: {
                    create: { bio: 'I like turtles' },
                },
            },
        })
        return { message: 'success' }
    } catch (error) {
        return { error: 'error' }

    }


}
