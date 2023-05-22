import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

  const uname= localStorage.getItem('uName')

  return (
    <div> 
        <Navbar className='navbar'>
    <Container>
    <i class="fa-solid fa-people-roof"></i>
    &#160;   &#160;
      <Navbar.Brand  className='text-light' href="/home">SupplierTracker</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text  className='text-light'>
          Signed in as: <span className='text-primary'>{uname}</span>
        </Navbar.Text>
        &#160;   &#160;
        <button className='m-1 bg-danger text-light'>Log Out</button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header