const mongoose=require('mongoose')
require('dotenv').config();

const connectionString=process.env.MONGODB_URI

const connection = () => {
    //mongoose.connect returns a promise
    console.log(connectionString)
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Connected to MongoDB Atlas'))
        .catch((err) => console.log('Error connecting to MongoDB Atlas', err));
}

module.exports = connection