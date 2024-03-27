require('dotenv').config()
const express = require('express')
const guestRoutes = require('./routes/guests')
import { Request, Response, NextFunction } from 'express';

//express app init
const app = express()

//middleware
app.use(express.json())
app.use((req: Request, res: Response, next: NextFunction) => {
    next()
})

//routes
app.use('/api/guests', guestRoutes)


//listen

app.listen(process.env.PORT, () => {

    console.log('listening on port:', process.env.PORT);

})


