import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const Createuser = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()

    const submitHandler =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/createpost",{name,email,age})
        .then((users)=>{
            console.log(users)
            navigate("/")
        })
        
       
        .catch((error)=>console.log(error.message))
    }
    return (
        <div className='d-flex   justify-content-center align-item-center'>
          <div className='w-50 bg-white rounded p-3'>
            <h2>Add User</h2>
            <form onSubmit={submitHandler}>
            <div className='mb-2'>
                <label>Name</label>
                <input type="text" placeholder='Enter Name'value={name} className='form-control' onChange={(e)=> setName(e.target.value)} required />

            </div>
            <div className='mb-2'>
                <label>Email</label>
                <input type="email" value={email} placeholder='Enter Email' className='form-control' onChange={(e)=>setEmail(e.target.value)} required />

            </div>
            <div className='mb-2'>
                <label>Age</label>
                <input type="text" value={age} placeholder='Enter Age' className='form-control' onChange={(e)=>setAge(e.target.value)} required />

            </div>
            <button type='submit' className='btn btn-success'>Submit</button>
            </form>
          </div>
        </div>
    );
};

export default Createuser;