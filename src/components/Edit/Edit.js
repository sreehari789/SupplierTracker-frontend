import React, { useEffect, useState } from 'react'
import './Edit.css'
import Header from '../Header'
import { useParams,useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Edit() {

const navigate= useNavigate()
const {id}=useParams()
const [formData, setFormData] = useState({});

//=========== to fetch data of vendor
const fetchdata=async()=>{
  const result= await fetch(`https://suppler-tracker-v1.onrender.com/api/vendor/viewVendor/${id}`)
  result.json().then(
    data=>{
     setFormData(data.vendor);
    }
  )}

useEffect(()=>{
  fetchdata()
},[])

const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

//====== to edit and update details of vendor
const handleSubmit= async (e)=>{
  e.preventDefault();
try{
const res = await axios.put(`https://suppler-tracker-v1.onrender.com/api/vendor/updateVendor/${id}`,formData)
console.log(res);
alert(res.data.message);
navigate('/home')
}catch(error){
  console.log(error);
}}

return (
<div>
<Header/>
<div className='content'>
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Vendor's Name</Form.Label>
        <Form.Control type="text" name='vendorName' value={formData.vendorName ||''} onChange={handleChange}  placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Bank Account No:</Form.Label>
        <Form.Control type="text" name='bankAccountNo' value={formData.bankAccountNo||''} onChange={handleChange}  placeholder="Enter Bank acc no:" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Bank Name</Form.Label>
        <Form.Control type="text" name='bankName' value={formData.bankName||''} onChange={handleChange} placeholder="Enter Bank Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control type="text" name='addressLine1' value={formData.addressLine1||''} onChange={handleChange} placeholder="Enter address Line" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='city' value={formData.city||''} onChange={handleChange} placeholder="Enter City" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" name='country' value={formData.country||''} onChange={handleChange} placeholder="Enter Country" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Zip Code:</Form.Label>
        <Form.Control type="text" name='zipCode' value={formData.zipCode||''} onChange={handleChange} placeholder="Enter zip code:" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>

</div>
</div>
  )
}

export default Edit