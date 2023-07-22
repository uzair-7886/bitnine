const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
}
)

//following is the method authToken defined on userSchema which returns json web token for the specified user with the payload of id this token would be used to authenticate further requests
userSchema.methods.authToken=function(){
    const token=jwt.sign({_id:this._id},'bitnineassessmentUzairKhan') //bitnineassessmentUzairKhan is the private key to sign the document for authentication purpose
    return token
}


const User=mongoose.model('User',userSchema)

module.exports=User