import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer row' style={{margin:'0', padding:'20px'}}>
            <div className='Contactfooter col-md-3'>
                <h3>Contact Information</h3>
                <ul >
                    <li > Marion street 227 Lagos, Nigeria</li>
                   
                    <li>medical-clinic.cmsmasters.net</li>
                    <li>medical-clinic@mail.com</li>
                    <li>1-888-333-444-222</li>
                </ul>
            </div>

            <div className='Doctorsfooter col-md-3'>
                <h3>Doctors</h3>
                <ul>
                    <li>Dr. Nick Sims</li>
                    <li>Dr. Michael Linden</li>
                    <li>Dr. Amy Adams</li>
                    <li>Dr. Max Turner</li>
                    <li>Dr. Julia Jameson</li>
                </ul>
            </div>

            <div className='Servicefooter col-md-3'>
                <h3>Services</h3>
                <ul>
                    <li>Cardiac Clinic</li>
                    <li>Ophthalmology Clinic </li>
                    <li>Gynaecological Clinic </li>
                    <li>Outpatient Rehabilitation</li>
                </ul>
            </div>




            <div className='Contactfooter col-md-3'>
                <h3>Contact Us</h3>
                <form className='contactform'>
                <div style={{}}>
                    <input placeholder='Email' className='' style={{width:'300px'}} ></input>
                </div>

                <div>
                <input placeholder='Message' className='' style={{width:'300px', height:'100px'}}></input>
                </div>

                <div>
                <input placeholder='Submit' className='' style={{width:'300px'}}></input>
                </div>
                
              
                
                </form>
            </div>
        </div>
    )
}

export default Footer
