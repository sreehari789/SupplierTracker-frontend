import React,{ useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Create() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [vendorName,setVendorName]=useState('')
    const [bankAccountNo,setBankAccountNo]=useState('')
    const [bankName,setBankName]=useState('')
    const [addressLine1,setAddressLine1]=useState('')
    const [city,setCity]=useState('')
    const [country,setCountry]=useState('')
    const [zipCode,setZipCode]=useState('')

const handleSubmit = async(e)=>{
  e.preventDefault();
  const body={
    vendorName,
    bankAccountNo,
    bankName,
    addressLine1,
    city,
    country,
    zipCode
  }
try{
  const id=localStorage.getItem('uId')
const res= await axios.post(`https://suppler-tracker-v1.onrender.com/api/vendor/postVendor/${id}`,body)
alert(res.data.message);
window.location.reload()
}
catch(error){
console.log(error);
  }}


return (
<div>
    <Button className='p-2'  onClick={handleShow}>
            <i class="fa-solid fa-user-plus"></i> &#160;
        Create new
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
    <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formvendorname">
        <Form.Control type="text" required value={vendorName} onChange={(e)=>setVendorName(e.target.value)} placeholder="Enter Vendor's Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formaccno">
        <Form.Control type="text" required value={bankAccountNo} onChange={(e)=>setBankAccountNo(e.target.value)} placeholder="Bank Account No:" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBankname">
        <Form.Control type="text" required value={bankName} onChange={(e)=>setBankName(e.target.value)} placeholder="Bank Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formaddresl">
        <Form.Control type="text" value={addressLine1} onChange={(e)=>setAddressLine1(e.target.value)} placeholder="Address Line 1" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Control type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="City" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCountry">
        <Form.Control type="text" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder="Country" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicZipcode">
        <Form.Control type="text" value={zipCode} onChange={(e)=>setZipCode(e.target.value)} placeholder="Zip Code" />
      </Form.Group>
        <Button className='m-2' variant="danger" onClick={handleClose}>Close</Button>
       <Button className='m-2' variant="success" type='submit'>Create</Button>
    </Form>
    </Modal.Body>
    </Modal>
    </div>
  )
}

export default Create