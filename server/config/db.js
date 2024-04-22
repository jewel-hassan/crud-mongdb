const mongoose = require('mongoose');
const { dburl } = require('../secret');



const dbConnected = async()=>{
   try {
    await mongoose.connect(dburl)
    console.log("db is connected")
   } catch (error) {
    console.log("db is not connected")
    console.log(error.message)
   }

}

module.exports=dbConnected