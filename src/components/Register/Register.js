import React, { useState } from 'react'
import './Register.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [userId,setUserId]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

 const handleSubmit= async(e)=>{
  e.preventDefault();
  const body={
    userId,email,password
  }
  console.log(body);
 try{
  const res= await axios.post('https://suppler-tracker-v1.onrender.com/api/register',body)
  alert(res.data.message);
  navigate('/')
}catch(error){
  alert(error.response.data.message);
 }
 }

  return (
<div className='login'>
      <div className='img-content'>
        <h1>SupplierTracker</h1>
      </div>
      <div className='login-content'>
        <div className='login-container'>
          <h3>Register</h3>
          <div>
          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={userId} onChange={(e)=>setUserId(e.target.value)} required />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} required />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
      </Form.Group>
  
     <div className='buttons'>
        <Button variant="primary" type="submit">
          Create Your Account
        </Button>
     </div>

    </Form>
          </div>
          <p className='link'>Already have an account ? &#160; &#160;<Link to={'/'} className='link1'>LOG IN</Link></p>

          </div>
      </div>
    </div>  )
}

export default Register