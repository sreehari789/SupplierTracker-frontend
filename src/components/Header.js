import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

  const uname= localStorage.getItem('uName')
  const navigate= useNavigate()

  const handleLogout=()=>{
    localStorage.removeItem('uId')
    localStorage.removeItem('uName')
    navigate('/')
  }

  return (
    <div> 
        <Navbar className='navbar'>
    <Container>
  <Link to={'home'}>
      <i class="fa-solid fa-people-roof"></i>
      &#160;   &#160;
        <Navbar.Brand  className='text-light'>SupplierTracker</Navbar.Brand>
  </Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text  className='text-light'>
          Signed in as: <span className='text-primary'>{uname}</span>
        </Navbar.Text>
        &#160;   &#160;
        <button onClick={handleLogout} className='m-1 bg-danger text-light'>Log Out</button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header