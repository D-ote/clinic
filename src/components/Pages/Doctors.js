import React from 'react'
import './Doctors.css'
import Home from '../../Images/Home.jpg'
import {Link}  from 'react-router-dom'
import {AiOutlineMobile, AiOutlineMail} from 'react-icons/ai'

const Doctors = () => {
    return (
        <div className='entirety row' style={{margin:'auto 0 0 0 '}}>
        <div className=' col-md-3'>
            
            <div className='Prof'>
            <img src={Home} width='400px' height='400px'/>
            <h3>Doctor Ritshak</h3>
            <p>Cardiologist</p>
            <blockquote>Cum sociis natoque penatibus et magnis
                dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
            </blockquote>
            <div className='mobile'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMobile style={{margin:'5px'}}/>
                        +2341234567
                    </Link>
                </div>
                <div  className='email'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMail style={{margin:'5px'}}/>
                        example@gmail.com
                    </Link>
                </div>
            
            </div>
            
        </div>

            <div className=' col-md-3'>

                <div className='Prof'>
                <img src={Home} width='400px' height='400px'/>
                <h3>Doctor Ritshak</h3>
                <p>Cardiologist</p>
                <blockquote>Cum sociis natoque penatibus et magnis
                    dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
                </blockquote>
                <div className='mobile'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMobile style={{margin:'5px'}}/>
                        +2341234567
                    </Link>
                </div>
                <div  className='email'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMail style={{margin:'5px'}}/>
                        example@gmail.com
                    </Link>
                </div>
                </div>
                
            </div>

            <div className=' col-md-3'>
            
                <div className='Prof'>
                <img src={Home} width='400px' height='400px'/>
                <h3>Doctor Ritshak</h3>
                <p>Cardiologist</p>
                <blockquote>Cum sociis natoque penatibus et magnis
                    dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
                </blockquote>
                <div className='mobile'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMobile style={{margin:'5px'}}/>
                        +2341234567
                    </Link>
                </div>
                <div  className='email'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMail style={{margin:'5px'}}/>
                        example@gmail.com
                    </Link>
                </div>
                
                </div>
                
            </div>

            <div className=' col-md-3'>
            
                <div className='Prof'>
                <img src={Home} width='400px' height='400px'/>
                <h3>Doctor Ritshak</h3>
                <p>Cardiologist</p>
                <blockquote>Cum sociis natoque penatibus et magnis
                    dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique
                </blockquote>
                <div className='mobile'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMobile style={{margin:'5px'}}/>
                        +2341234567
                    </Link>
                </div>
                <div  className='email'>
                    <Link style={{color:'#787878'}}>
                        <AiOutlineMail style={{margin:'5px'}}/>
                        example@gmail.com
                    </Link>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Doctors
