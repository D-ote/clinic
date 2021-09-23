import React from 'react'
// import {Link} from 'react-router-dom'
import { Navbar, NavbarBrand, Container, NavLink, Nav, NavDropdown} from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import './Navbar.css'
import logoeditted from '../../Images/logoeditted.png'

const Navbar1 = () => {
    return (
        <div>
              <Navbar className='Nav navbar-light' collapseOnSelect>
    <Container className='me-auto'style={{margin:'10px auto'}}>
    

    <Nav className="/" style={{float:'left', color:'white'}}>
      <Nav.Link  to="/FAQ" style={{color:'white'}}>FAQ</Nav.Link>
      <Nav.Link  to="/book" style={{color:'white'}}>Book an Appointment</Nav.Link>
      <Nav.Link to="/" style={{color:'white'}}>exanple@gmail.com</Nav.Link>
      <Nav.Link to="/contacts" style={{color:'white'}}>Contacts</Nav.Link>
      </Nav>
      <Nav style={{float:'right'}}>
      <Nav.Link  to="/" style={{color:'white'}}><FaFacebookF/></Nav.Link>
      <Nav.Link  to="/" style={{color:'white'}}><FaInstagram/></Nav.Link>
      <Nav.Link to="/" style={{color:'white'}}><FaTwitter/></Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>

  <Navbar  className='Nav navbar-light' >
  <Container className='me-auto1' style={{margin:'50px 0 25px 0'}}>
  <NavbarBrand className='brand' to="/" style={{ float:'left',margin:'20px'}}><img
        style={{textAlign:'left',marginTop:'5px' }}
        src={logoeditted}
        width="80"
        height="50"
        className="d-inline-block align-top"
        alt=""
      /> <h2 style={{marginLeft:'20px',color:'white',fontSize:'35px'}}>Medical</h2><h2 style={{paddingLeft:'20px',fontWeight:'200',color:'white',fontSize:'35px'}}> Clinic</h2></NavbarBrand>
   </Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Container  style={{margin:'60px 30px 0 auto'}} >
    <Navbar.Collapse id="responsive-navbar-nav" style={{margin:'20px'}}>
      <Nav className="me-auto" style={{marginRight:'0 30px'}}>
        <Nav.Link href="/home" style={{color:'white'}}>Home</Nav.Link>
        <NavDropdown title="Departments" id="basic-nav-dropdown" style={{color:'white !important' }}>
       
          <NavDropdown.Item href="/surgery">Outpatient Surgery</NavDropdown.Item>
          <NavDropdown.Item href="ophthal">Ophthalmology Clinic</NavDropdown.Item>
          <NavDropdown.Item href="/gynae">Gynaecological Clinic</NavDropdown.Item>
          <NavDropdown.Item href="/lyran">Lyrancological Clinic</NavDropdown.Item>
          <NavDropdown.Item href="pediatrics">Pediatric Clinic</NavDropdown.Item>
          <NavDropdown.Item href="/lab">Laboratory Analysis</NavDropdown.Item>

        </NavDropdown><NavDropdown title="Features" id="basic-nav-dropdown" style={{color:'white'}}>

          <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Our Doctors</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Appointments</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">News</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Shop</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#home" style={{color:'white'}}>Timetables</Nav.Link>
        <Nav.Link href="#home" style={{color:'white'}}>Shortcodes</Nav.Link>
        <Nav.Link href="#link" style={{color:'white'}}>Post Types</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navbar1
