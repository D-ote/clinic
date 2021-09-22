import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter,FaBars, FaSearchPlus} from 'react-icons/fa'
import { RiArrowDropDownLine} from 'react-icons/ri'
import './Navitems.css'
import logonew from '../../Images/logonew.png'


const Nav = () => {
    return (
        <div>
             <nav style={{margin:'0'}}> 
            <div className='entirenav'>
           <div className='first-nav row' width='100%'> 
            <div className=' col-md-6 col-lg-6' >
                <ul className='first-navleft'>
                    <li className='firstleftlist'><Link to='/faq' className='topleftlink'>FAQ</Link></li>
                    <li className='firstleftlist'><Link to='/book' className='topleftlink'>Book an Appointment</Link></li>
                    <li className='firstleftlist'><Link to='/contacts' className='topleftlink'>Contacts</Link></li>
                    <li className='firstleftlist'> <Link to='/mail' className='topleftlink'>example@example.com</Link></li>
                </ul>
            </div>
            <div className='col-md-6 col-lg-6' width='100%'>
                <ul className='first-navright' style={{ width:'100%'}}>
                    <li className='firstrightlist'><Link className='firstrightlink'><FaFacebookF/></Link></li>
                    <li className='firstrightlist'><Link className='firstrightlink'><FaInstagram/></Link></li>
                    <li className='firstrightlist'><Link className='firstrightlink'><FaTwitter/></Link></li>
                </ul>
            </div>
            </div>

            <div className='select' style={{textAlign: 'center'}}> 
                     <Link className='dropdown' style={{textAlign: 'center'}}><RiArrowDropDownLine/></Link>
            </div> 

            <div className='Menu row'> 
                <div className=' col-md-3 col-sm-12'>
                    <div className='second-navleft'>
                        <img src={logonew} height='70px' width='70px'/>
                        
                        <div className='navtext' style={{display:'flex'}}>
                        <h3>Medical </h3> <h3 className='clinic'>Clinic</h3>
                        </div>
                    </div>
               
                </div>
                <div className='topsecond col-md-9 col-sm-12'>
                    <ul className='second-navright'>
                        <li className='secondrightlist'><Link to='/' className='secondrightlink'>Home</Link></li>
                        <li className='secondrightlist'><Link to='/' className='secondrightlink'>Departments</Link></li>
                        <div className='sub-menu1'>
                            <ul>
                                <li><Link>Outpatient Surgery</Link></li>
                                <li><Link>Ophthalmology Clinic</Link></li>
                                <li><Link>Gynaecological Clinic</Link></li>
                                <li><Link>Lyrancological Clinic</Link></li>
                                <li><Link>Pediatric Clinic</Link></li>
                                <li><Link>Laboratory Analysis</Link></li>

                            </ul>
                            </div> 
                        <li className='secondrightlist'><Link to='/' className='secondrightlink'>Timetables</Link></li>
                        <li className='secondrightlist'><Link to='/' className='secondrightlink'>Features</Link></li>
                        <div className='sub-menu2'>
                        <ul>
                                <li><Link>About</Link></li>
                                <li><Link>Our Doctors</Link></li>
                                <li><Link>Appointments</Link></li>
                                <li><Link>News</Link></li>
                                <li><Link>Shop</Link></li>
                                <li><Link>Contact</Link></li>

                            </ul>
                            </div> 
                        <li className='secondrightlist'> <Link to='/' className='secondrightlink'>Shortcodes</Link></li>
                        <li className='secondrightlist'> <Link to='/' className='secondrightlink'>Post Types</Link></li>
                    
                    </ul>

                    <div className='search ' style={{marginLeft: '14px'}}>
                            <Link className='search-link' style={{padding: '6px'}}><FaSearchPlus/></Link>
                    </div>
                </div> 
            </div>

            <div className='toggleitems' >
                    <div className='search-toggle'>
                        <div className='search'>
                            <Link className='search-link'><FaSearchPlus/></Link>
                        </div>
                        <div className='toggle'> 
                        <Link className='toggle-bar'><FaBars/></Link> 
                        </div>
            </div>
            </div>
            </div> 
        </nav>
    </div>

        
    )
}

export default Nav
