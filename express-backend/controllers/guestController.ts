import { Request, Response, } from 'express';
import { PrismaClient } from '@prisma/client'
import { GuestModel } from '../prisma/zod';

const prisma = new PrismaClient()

//get all guests
export const getAllGuests=async (req: Request, res: Response) => {
    try {
        const guest = await prisma.guest.findMany({})
        res.json({ message: 'all guests', guest })
    } catch (error) {
        res.json({ error })
    }

}

//get a  guest by id 
export const getGuestById=async (req: Request, res: Response) => {
    
    try {
        const guest = await prisma.guest.findUnique({
            where: {
                id: req.params.id
            }
        })
        if(!guest){
            return res.json({ error: 'no such guest by that id found' })
         
        }
        res.json({ message: 'guest by id', guest })
    } catch (error) {
        res.json({ error })
    }

}

//get a  guest by email
export const getGuestByEmail=async (req: Request, res: Response) => {
    try {
        const guest = await prisma.guest.findUnique({
            where: {
                email: req.params.email
            }
        })
        if(!guest){
            return res.json({ error: 'no such guest by that email found' })
         
        }
        res.json({ message: 'guest by email', guest })
    } catch (error) {
        res.json({ error })
    }
}

//post  creater guest

export const createGuest=async (req: Request, res: Response) => {
    const body = req.body
    const parsedData = GuestModel.safeParse(body)
    if (!parsedData.success) {
        return res.status(400).json({ error: 'invalid data entered' })
        
    }
    try {
        const guest = await prisma.guest.create({
            data: parsedData.data
        })
        res.status(200).json({ message: guest })
    } catch (error) {
        res.status(400).json({ error: error })
    }

}

//delete  guest by id
export const deleteGuest=async (req: Request, res: Response) => {
    try {
        const guest = await prisma.guest.delete({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: 'guest deleted', guest })
    } catch (error) {
        res.json({ error })
    }

}

//update guest 
export const updateGuest=async (req: Request, res: Response) => {
    const body = req.body
    const parsedData = GuestModel.safeParse(body)
    if (!parsedData.success) {
        return res.status(400).json({ error: 'invalid data entered' })
        
    }
    try {
        const guest = await prisma.guest.update({
            where:{id:req.params.id},
            data: parsedData.data
        })
        res.status(200).json({ message: guest })
    } catch (error) {
        res.status(400).json({ error: error })
    }

}

