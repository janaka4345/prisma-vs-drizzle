import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import prisma from '../../utils/prismaClient'
import { GuestModel } from '../../prisma/zod'
export const guestControllerRouter = router({
    getAllGuests: publicProcedure.query(async () => {
        const guests = await prisma.guest.findMany()
        return { guests }
    }),
    getAGuestById: publicProcedure.input(z.string()).query(async (opts) => {
        // console.log(opts)
        // const { input } = opts
        const guest = await prisma.guest.findFirst({
            where: { id: opts.input },
        })
        return guest
    }),
    getAGuestByEmail: publicProcedure
        .input(z.string().email())
        .query(async (opts) => {
            const guest = await prisma.guest.findFirst({
                where: { id: opts.input },
            })
            return guest
        }),
    createAGuest: publicProcedure
        .input(GuestModel)
        // .output(GuestModel)
        .mutation(async (opts) => {
            const { input } = opts
            console.log(input)
            const guest = await prisma.guest.create({
                data: {
                    first_name: input.first_name,
                    last_name: input.last_name,
                    email: input.email,
                    phone_no: input.phone_no,
                },
            })
            return guest
        }),
})
