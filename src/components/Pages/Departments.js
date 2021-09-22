import React from 'react'
import laryngology from '../../Images/laryngology.jfif'
import {Link}  from 'react-router-dom'
import {AiOutlineMobile, AiOutlineMail} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'
import './department.css'
import './Doctors.css'

const Departments = () => {
    return (
        <div className='row' style={{}}>
            <div className='col-md-3 col-sm-12' style={{margin:'20px 0px 0px 0px'}}>
                    <div className='department0' style={{marginTop:'0px'}}>
                        <h3>Departments</h3>
                        <p>Outpatient Clinic</p>
                        <p>Cardiac Clinic</p>
                        <p>Ophthalmological Clinic</p>
                        <p>Gynaecological Surgery</p>
                        <p>Laryngological Surgery</p>
                        <p>Pediatric Surgery</p>
                        <p>outpatient Surgery</p>
                    </div>

                <div className='department1' style={{margin:'0 0'}}>
                    <h3 style={{fontWeight: '400'}}>Opening hours</h3>
                    <div className='openinghours'>
                        <p>Monday-Friday : </p>
                        <p style={{paddingLeft:'30px'}}> 8:00-17:00</p>
                    </div>

                    <div className='openinghours'>
                        <p>Saturday : </p>
                        <p style={{paddingLeft:'30px'}}> 9:30-17:30</p>
                    </div>

                    <div className='openinghours'>
                        <p>Sunday : </p>
                        <p style={{paddingLeft:'30px'}}> 9:30-15:00</p>
                    </div>

                </div>

                <div className='department2' style={{marginTop:'0'}}>
                    <h3 style={{fontWeight: '400',paddingTop:'15px' }}>Contacts</h3>
                   
                    <div className='locationnew' style={{marginTop:'10px'}}>
                        <Link style={{marginTop:'0'}}>
                        <AiOutlineMobile className='telephone'/>
                        </Link>
                    
                        <p style={{paddingLeft:'30px', marginTop:'0'}}>+2341234567</p>
                    </div>
                
                
                      <div className='locationnew' style={{marginTop:'10px'}}>
                       <Link style={{marginTop:'0'}}>
                       <AiOutlineMail className='mail'/>
                       </Link>
                   
                        <p style={{paddingLeft:'30px'}}>medicalclinic@mail.com</p>
                    </div>
                   
                    <div className='locationnew' style={{marginTop:'10'}}>
                        <Link>
                        <FaMapMarkerAlt className='map'/>
                        </Link>
                   
                        <p style={{paddingLeft:'30px'}}>7070 Kashim Street</p>
                    </div>
                </div>
                </div>
            
                
            <div className='topcol col-md-9 col-sm-12' style={{marginBottom:'25px'}}>
            <img src={laryngology} width='100%' height='750px'/>
            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida. Phasellus velit risus, euismod a lacus et, mattis condimentum augue. Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt cursus gravida ut, sodales ut magna. Sed sodales libero sapien, et rutrum mi placerat eget. Nulla vestibulum lacus vel eros eleifend molestie. Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis scelerisque porttitor in ac turpis. In nec imperdiet turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis ipsum. Integer eget sagittis nulla. Praesent consectetur lacus et maximus 
            eleifend. Integer non lacus dui. Mauris tortor diam, laoreet quis commodo vitae, sodales vel augue.</blockquote>

            <div className='toprow row'>
                <div className='firstcol col-md-3' style={{margin:'0px',padding:'0px'}}>
                    <ul >
                    <li>Colonoscopy – $105</li>
                    <li>Gastroscopy – $225</li>
                    <li>Allergy testing – $335</li>
                    <li>Gastroscopy – $295</li>
                    <li>Allergy testing – $355</li>
                    </ul>
                </div>

                <div className='col-md-3'>
                <ul>
                    <li>Colonoscopy – $105</li>
                    <li>Gastroscopy – $225</li>
                    <li>Allergy testing – $335</li>
                    <li>Gastroscopy – $295</li>
                    <li>Allergy testing – $355</li>
                    </ul>
                </div>
                    
                <div className='col-md-3'>
                    <ul>
                    <li>Colonoscopy – $105</li>
                    <li>Gastroscopy – $225</li>
                    <li>Allergy testing – $335</li>
                    <li>Gastroscopy – $295</li>
                    <li>Allergy testing – $355</li>
                    </ul>
                </div>
            </div>

            <div className='row' style={{margin:'30px 0 0 0', padding:'0'}}>
            <div className='col-md-3' style={{border:'1px solid #787878',marginLeft:'15px'}}>
                <img src={laryngology} width='100%' height='400px'/>
                <h3 style={{borderBottom:'1px solid #787878',paddingTop:'10px'}}>Doctor Ritshak</h3>
                <p style={{borderBottom:'1px solid #787878',paddingTop:'10px',fontSize:'20px'}}>Cardiologist</p>
                <blockquote>Cum sociis natoque penatibus et magnis
                    dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
                </blockquote>
                <div className='mobile'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMobile style={{margin:'30px'}}/>
                        +2341234567
                    </Link>
                </div>
                <div  className='email'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMail style={{margin:'30px'}}/>
                        example@gmail.com
                    </Link>
                </div>
                </div>

                <div className='col-md-3' style={{border:'1px solid #787878',marginLeft:'15px'}}>
                <img src={laryngology} width='100%' height='400px'/>
                <h3 style={{borderBottom:'1px solid #787878',paddingTop:'10px'}}>Doctor Ritshak</h3>
                <p style={{borderBottom:'1px solid #787878',paddingTop:'10px',fontSize:'20px'}}>Cardiologist</p>
                <blockquote>Cum sociis natoque penatibus et magnis
                    dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
                </blockquote>
                <div className='mobile'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMobile style={{margin:'30px'}}/>
                        +2341234567
                    </Link>
                </div>
                <div  className='email'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMail style={{margin:'30px'}}/>
                        example@gmail.com
                    </Link>
                </div>
            </div>

            <div className='col-md-3' style={{border:'1px solid #787878',marginLeft:'15px'}}>
                <img src={laryngology} width='100%' height='400px'/>
                <h3 style={{borderBottom:'1px solid #787878',paddingTop:'10px'}}>Doctor Ritshak</h3>
                <p style={{borderBottom:'1px solid #787878',paddingTop:'10px',fontSize:'20px'}}>Cardiologist</p>
                <blockquote>Cum sociis natoque penatibus et magnis
                    dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
                </blockquote>
                <div className='mobile'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMobile style={{margin:'30px'}}/>
                        +2341234567
                    </Link>
                </div>
                <div  className='email' style={{display:'flex'}}>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMail style={{margin:'30px'}}/>
                        example@gmail.com
                    </Link>
                </div>
                </div>


                <form className='appointment' width='100%'>
                    <div className='departments-one'>
                    <div style={{margin:'10px'}}>
                        <select className='departments' placeholder='Select Departments' width=''>
                        <p >Select Departments</p>
                            <option>Pediatrics</option>
                            <option>Pediatrics</option>
                            <option>Pediatrics</option>
                            <option>Pediatrics</option>
                        </select>
                        </div>

                        <div style={{margin:'10px'}}>
                        <select className='doctors'title='Select Doctors'>
                            <p>Select Doctors</p>
                            <option>Dr Moses</option>
                            <option>Dr Nancy</option>
                            <option>Dr Okeke</option>
                            <option>Dr Chike</option>
                        </select>
                        </div>

                        
                    </div>

                    <div className='name-phone'>
                        <div style={{margin:'10px'}}>
                            <input  className='name' placeholder='Your Name'></input>
                        </div>
                        <div style={{margin:'10px'}}>
                            <input style={{}}className='name' placeholder='Phone'></input>
                        </div>
                    </div>
                    <div className='mail-date'>
                        <div style={{margin:'10px'}}>
                            <input className='name' placeholder='Email'></input>
                        </div>
                        <div style={{margin:'10px'}}>
                            <input className='name' placeholder='Date'></input>
                        </div>
                    </div>
                    <button style={{padding: '20px',margin: '15px', color:'white', width:'300px', fontSize:'20px'}} type='submit'>Make an Appointment</button>
                </form>


            </div>

            </div>

        </div>
    )
}

export default Departments

