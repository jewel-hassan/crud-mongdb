const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"user email required"],
    },
    email:{
        type:String,
        required:[true,"user email required"],
    },
    age:{
        type:Number,
        required:[true,"user age required"],
    },
    createdAT:{
        type:Date,
        default:Date.now,
    }

})

const User = mongoose.model("users",usersSchema)


module.exports=User
