const express = require('express')

import { Request, Response, } from 'express';
import { PrismaClient } from '@prisma/client'
import { GuestModel } from '../prisma/zod';

const prisma = new PrismaClient()
console.log('prisma client 1 created');



const router = express.Router()

//get all guests
router.get('/', async (req: Request, res: Response) => {
    try {
        const guest = await prisma.guest.findMany({})
        res.json({ message: 'all guests', guest })
    } catch (error) {
        res.json({ error })
    }

})

//get a  guest by id or email
router.get('/id/:id', async (req: Request, res: Response) => {
    // console.log(req.params);
    try {

        const guest = await prisma.guest.findUnique({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: 'guest by id', guest })
    } catch (error) {
        res.json({ error })
    }

})

//get a  guest by email
router.get('/email/:email', async (req: Request, res: Response) => {
    try {
        const guest = await prisma.guest.findUnique({
            where: {
                email: req.params.email
            }
        })

        res.json({ message: 'guest by email', guest })
    } catch (error) {
        res.json({ error })
    }
})

//post / creater guest
router.post('/', async (req: Request, res: Response) => {
    const body = req.body
    const parsedData = GuestModel.safeParse(body)
    if (!parsedData.success) {
        res.status(400).json({ error: 'invalid data entered' })
        return
    }
    try {
        const guest = await prisma.guest.create({
            data: parsedData.data
        })
        res.status(200).json({ message: guest })
    } catch (error) {
        res.status(400).json({ error: error })
    }

})

//delete  guest by id
router.delete('/:id', (req: Request, res: Response) => {
    res.json({ message: 'delete guest' })

})
//update guest by id
router.patch('/:id', (req: Request, res: Response) => {
    res.json({ message: 'update  guest' })

})



module.exports = router
