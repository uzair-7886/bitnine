const express = require('express')
const cors =require('cors')
const connection=require('./db')
require('dotenv').config();
const signupRoute=require('./routes/signup')


const app = express()
const PORT =process.env.PORT || 8000

//middlewares
app.use(cors()) //to resolve cross-origin resource sharing because client server is requesting from port 3000 and backend server is running on port 3001
app.use(express.json()) //without it the server would receive json data as a string, it is used to parse it as a js object

//routes
app.use('/signup',signupRoute)

connection() //connects with mongodb


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})