const express = require("express")
const app = express()


const cors = require('cors')
const bodyParser = require('body-parser');
const { port } = require("./secret");
const dbConnected = require("./config/db");
const User = require("./model/userModel");




app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// USER POST ROUTE

app.post("/createpost",async(req,res)=>{
    try {
        
        const newUser =  new User({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,

        })
        await newUser.save()
        if(newUser){
            return res.status(200).json({
                success:true,
                message:"user created successfully",
                data:newUser,
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"user is created failed"
            })
        }
    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message,
        })
    }
})


// USER GET

app.get("/users",(req,res)=>{
  try {
    User.find()
    .then(users => res.json(users))
    .catch(error => res.json(error))
   
  } catch (error) {
    res.status(500).json({
        success:false,
        error:error.message,
    })
  }
})


// GET ONE  USER

app.get("/users/:id",(req,res)=>{
   try {
    const id = req.params.id
    User.findById({_id:id})
    .then(users => res.json(users))
    .catch(error => res.json(error))
   } catch (error) {
     res.status(500).json({
        success:false,
        error:error.message
     })
   }

})

// UPDATE USER

app.put("/updateuser/:id",(req,res)=>{
    try {
        const id = req.params.id
        User.findByIdAndUpdate({_id:id},{
            name:req.body.name,
            email:req.body.email,
            age:req.body.age
        })
    .then(users => res.json(users))
    .catch(error => res.json(error))

    } catch (error) {
        res.status(500).json({
            success:false,
            error:error.message
         })
    }
})

// DELETE USER
app.delete("/deleteuser/:id",(req,res)=>{
  try {
    const id = req.params.id
    User.findByIdAndDelete({_id:id})
    .then((res)=>res.json(res))
    .catch((err)=> res.json(err))
  } catch (error) {
    res.status(500).json({
        success:false,
        error:error.message
     })
  }
})
// HOME ROUTE

app.get("/",(req,res)=>{
    res.send("<h1>welcome to server</h1>")
    res.end()
})

// CLIENT ERROR

app.use((req,res,next)=>{
    res.status(400).send('<h1>404! page not found</h1>')
    next()
})


app.listen(port,async()=>{
    console.log(`server is running at http://localhost:${port}`)
    await dbConnected()
})
