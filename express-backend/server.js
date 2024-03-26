require('dotenv').config()
const express = require('express')
const guestRoutes = require('./routes/guests')

//express app init
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})



//routes
app.use('/api/guests', guestRoutes)
// app.get('/', (req, res) => {
//     res.json({ message: 'hi from server' })
// })

//listen
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);

})
