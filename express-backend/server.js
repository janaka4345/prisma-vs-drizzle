require('dotenv').config()
const express = require('express')

//express app init
const app = express()

// app.use()

//routes
app.get('/', (req, res) => {
    res.json({ message: 'hi from server' })
})

//listen
app.listen(process.env.PORT, () => {
    console.log({ process })
    console.log('listening on port', process.env.PORT);

})
