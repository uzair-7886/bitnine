const express = require('express')
const cors =require('cors')
const connection=require('./db')


const app = express()
const PORT = 3001

connection()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})