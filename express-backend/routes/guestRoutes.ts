import { createGuest, deleteGuest, getAllGuests, getGuestByEmail, getGuestById, updateGuest } from "../controllers/guestController"

const express = require('express')

const router = express.Router()

//get all guests
router.get('/',getAllGuests )

//get a  guest by id 
router.get('/id/:id',getGuestById )

//get a  guest by email
router.get('/email/:email',getGuestByEmail )

//post  creater guest
router.post('/',createGuest )

//delete  guest by id
router.delete('/:id', deleteGuest)
//update guest by id
router.patch('/:id',updateGuest)



module.exports = router

