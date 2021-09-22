import React from 'react'
import {Link} from 'react-router-dom'
import './Contact.css'
import {AiOutlineMail, AiOutlineMobile} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'


const Contact = () => {
    return (
        <div className='Contact row'>
            <div className='contact-one col-md-4 col-sm-12'>
                <div className='call'>
                    <Link>
                    <AiOutlineMobile className='call-icon'/>
                    </Link>
                    <div className='textarea1'>
                    <p className='contact-text'>Give us a call</p>
                    <p className='contact-contact'>+2341234567</p>
                    </div>
                 </div>
            </div>

            <div className='contact-two col-md-4 col-sm-12'>
                <div className='message'>
                    <Link>
                    <AiOutlineMail className='sms-icon'/>
                    </Link>
                    <div>
                    <p className='contact-text'>Pay us a Visit</p>
                    <p className='contact-contact'>7070 Kashim Street</p>
                    </div>
                 </div>
            </div>

            <div className='contact-three col-md-4 col-sm-12'>
                <div className='location'>
                    <Link>
                    <FaMapMarkerAlt className='map-icon'/>
                    </Link>
                    <div>
                    <p className='contact-text'>Pay us a Visit</p>
                    <p className='contact-contact'>7070 Kashim Street</p>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Contact
