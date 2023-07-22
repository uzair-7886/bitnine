const login = require('express').Router()
const  User = require('../models/user')
const bcrypt=require('bcrypt')

login.post("/",async (req,res)=>{
    try {
        const user= await User.findOne({email:req.body.email})
        if(!user){
            return res.status(401).send({message:"User does not exist with given email"})
        }

        const validPassword=await bcrypt.compare(req.body.password,user.password)

        if(!validPassword){
            return res.status(401).send({message:"Invalid Password"})
        }

        //if user is authenticated with correct email and password we return token
        // console.log(user)
        const token=user.authToken()
        // console.log(token)
        res.status(200).send({data:token,message:"Login successfully"})
        // res.status(200).send(token)


    } catch (error) {
        console.log(error)
        res.status(500).send({message:"internal server error"})
    }
})


module.exports=login