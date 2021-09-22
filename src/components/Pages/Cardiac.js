import React from 'react'
import {Nav, NavLink} from 'react-bootstrap'
import Departments from './Departments'
import Navbar1 from '../Navbar/Navbar'

const Cardiac = () => {
    return (
        <div>
            <Navbar1/>
            <Nav className="/" style={{float:'left', color:'white'}}>
            <Nav.Link>Cardiacoratory Clinic</Nav.Link>
      
    </Nav>
            <Departments/>
        </div>
    )
}

export default Cardiac
