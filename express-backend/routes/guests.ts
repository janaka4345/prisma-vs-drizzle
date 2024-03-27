const express = require('express')



import { Request, Response, NextFunction } from 'express';
import db from '../utils/prismaClient';


const router = express.Router()

//get all guests
router.get('/', async (req:Request, res:Response) => {
    const guest= await db.guest.findMany({})
    res.json({ mesage: 'all guests' ,guest})
})

//get a  guest by id or email
router.get('/id/:id', (req:Request, res:Response) => {
    // console.log(req.params);

    res.json({ mesage: 'guest by id' })
})

//get a  guest by email
router.get('/email/:email', (req:Request, res:Response) => {
    console.log(req.params);

    res.json({ mesage: 'guest by email' })
})

//post / creater guest
router.post('/', (req:Request, res:Response) => {
    
    res.json({ mesage: 'post /creted guest gueest' })

})

//delete  guest by id
router.delete('/:id', (req:Request, res:Response) => {
    res.json({ mesage: 'delete gueest' })

})
//update guest by id
router.patch('/:id', (req:Request, res:Response) => {
    res.json({ mesage: 'update  gueest' })

})



module.exports = router

