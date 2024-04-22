import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
    
    const[users,setUsers]=useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/users")
        .then((users)=>setUsers(users.data))
        .catch((error)=>console.log(error.message))
      
    }, [])

    const handleDelete =(id)=>{
        axios.delete("http://localhost:3000/deleteuser/"+id)
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error.message))
    }
    
    return (
        <div className='d-flex   justify-content-center align-item-center'>
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className="btn btn-success">Add+</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                           return     <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                                <button className='btn btn-danger' onClick={()=> handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>  
                            })
                        }
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default User;