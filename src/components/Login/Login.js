import React, { useState } from 'react'
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';



function Login() {

  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const navigate= useNavigate()

  const handleSubmit= async (e)=>{
    e.preventDefault();

try{
const res= await axios.post('https://suppler-tracker-v1.onrender.com/api/login',{email,password})
 
localStorage.setItem("uId",res.data.data._id)
localStorage.setItem("uName",res.data.data.userId)
alert(res.data.message);
navigate('/home')
}
catch(error){
  alert(error.response.data);
}}


  return (
    <div className='login'>
      <div className='img-content'>
        <h1>SupplierTracker</h1>
      </div>
      <div className='login-content'>
        <div className='login-container'>
          <h3>Login</h3>
          <div>
          <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
      </Form.Group>
  
     <div className='buttons'>
        <Button variant="primary" type="submit">
          LOG IN
        </Button>
      
       
     </div>
    </Form>
    <p className='link'>Don't have an account ? &#160; &#160;<Link to={'register'}className='link1'>  SIGN UP</Link></p>

          </div>
          
          </div>

      </div>
    </div>
  )
}

export default Login