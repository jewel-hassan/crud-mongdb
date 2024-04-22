import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const{id}=useParams()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3000/users/"+id)
        .then((users)=>{
            console.log(users)
            setName(users.data.name)
            setEmail(users.data.email)
            setAge(users.data.age)
        })
        .catch((error)=>console.log(error.message))
      
    }, [])

    const updateHandler =(e)=>{
        e.preventDefault()
        axios.put("http://localhost:3000/updateuser/"+id,{name,email,age})
        .then((users)=>{
            console.log(users)
            navigate("/")
        })
        
       
        .catch((error)=>console.log(error.message))
    }

    return (
        <div className='d-flex   justify-content-center align-item-center'>
          <div className='w-50 bg-white rounded p-3'>
            <h2>Update User</h2>
            <form onSubmit={ updateHandler}>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name'value={name} className='form-control' onChange={(e)=>setName(e.target.value)} required />

            </div>
            <div className='mb-2'>
                <label htmlFor="">Email</label>
                <input type="email" value={email} placeholder='Enter Email' className='form-control' onChange={(e)=>setEmail(e.target.value)} required />

            </div>
            <div className='mb-2'>
                <label htmlFor="">Age</label>
                <input type="text" placeholder='Enter Age' className='form-control' value={age} onChange={(e)=>setAge(e.target.value)} required />

            </div>
            <button className='btn btn-success'>Update</button>
            </form>
          </div>
        </div>
    );
};

export default Update;