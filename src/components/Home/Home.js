import React,{useEffect, useState} from 'react'
import Header from '../Header'
import Table from 'react-bootstrap/Table';
import './Home.css'
import { Link } from 'react-router-dom';
import CreateModal from '../CreateModal';
import axios from 'axios';

function Home() {
  
  const[vendor,setVendor]=useState([])

  const fetchdata= async()=>{
    const id = localStorage.getItem('uId');
    const result= await fetch(`https://suppler-tracker-v1.onrender.com/api/vendor/getVendor/${id}`)
    result.json().then(
      data=>{
        setVendor(data.vendors);
      }
    )
  }
  useEffect(()=>{
    fetchdata()
  },[])

const handleDeleteVendor= async(vendorId)=>{
  const confirmDeleteVendor=window.confirm('Are you sure you want to delete this data ?')
  if(confirmDeleteVendor){
    try{
   
      await axios.delete(`https://suppler-tracker-v1.onrender.com/api/vendor/deleteVendor/${vendorId}`)
    fetchdata()
    }catch(error){
      console.log(error);
    }
  }
 
}
return (
<>
<Header/>
  <div className='content'>
  <div className='create-section'>
    <h4>Vendor Database</h4>
    <div><CreateModal/></div>
</div>
  <Table>
      <thead>
        <tr className='table-head'>
          <th>#</th>
          <th>Vendor Name</th>
          <th>Bank Account No.</th>
          <th>Bank Name</th>
          <th>Action</th>
        </tr>
      </thead>
    { 
    vendor.map((item)=>(
      <tbody>
      <tr>
        <td>1</td>
        <td>{item.vendorName}</td>
        <td>{item.bankAccountNo}</td>
        <td>{item.bankName}</td>
        <td><Link to={`/Edit/${item._id}`}><button className='action-button'><i class="fa-solid fa-pen-to-square"></i> Edit</button></Link> <button onClick={() => handleDeleteVendor(item._id)} className='action-button1'><i class="fa-solid fa-trash"></i> Delete</button></td>
      </tr>
    </tbody>
    
    ))
  
      }
    </Table>

  </div>
</>
  )
}

export default Home