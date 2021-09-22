import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillBackward, AiFillForward} from 'react-icons/ai'
import doctor1 from '../../Images/Home.jpg'
import doctorsnew from '../../Images/doctorsnew.jfif'
import doctorsnew1 from '../../Images/doctorsnew1.jfif'
import doctorsnew2 from '../../Images/doctorsnew2.jfif'
import './Service.css'


const Service = () => {
    return (
    <div>
        <div className='services'>
            <div className='listline'>
                <h3>Departments</h3>
                <p>Outpatient Clinic</p>
                <p>Cardiac Clinic</p>
                <p>Ophthalmological Clinic</p>
                <p>Gynaecological Surgery</p>
                <p>Laryngological Surgery</p>
                <p>Pediatric Surgery</p>
                <p>outpatient Surgery</p>
            </div>
                
            <div className='all-comp'>
                <div className='comp'>
                    <div className='comp-text'>
                        <p>Innovation</p>
                        <h4>Services</h4>
                    </div>
                    <div className='icons'>
                        <AiFillBackward  className='icon-back'/><AiFillForward className='icon-forward' />
                    </div>
            </div>
                <div className='all-images '>
                    <div className='image-slide'>
                        <div className='images'>
                            <img src={doctor1} width='400px' height='400px'/>
                        </div>
                        <div className='image-text' max-width='400px' height='400px'> 
                            <h3>Laboratory</h3>
                            <p style={{width:'400px'}}>Cum sociis natoque penatibus 
                            et magnis dis parturient montesmus. 
                            Pro vel nibh et elit mollis commodo et nec augueique</p>
                        </div>
                    </div>

                    <div className='image-slide'>
                        <div className='images' >
                            <img className='' src={doctorsnew} width='400px' height='400px'/>
                        </div>
                        <div className='image-text'  height='400px'>
                            <h3>Laboratory</h3>
                            <p style={{width:'400px'}}>Cum sociis natoque penatibus 
                            et magnis dis parturient montesmus. 
                            Pro vel nibh et elit mollis commodo et nec augueique</p>
                        </div>
                    </div>

                    <div className='image-slide' >
                        <div className='images' >
                            <img className='' src={doctorsnew1} width='400px' height='400px'/>
                        </div>
                        <div className='image-text' max-width='400px' height='400px'>
                            <h3>Laboratory</h3>
                            <p style={{width:'400px'}}>Cum sociis natoque penatibus 
                            et magnis dis parturient montesmus. 
                            Pro vel nibh et elit mollis commodo et nec augueique</p>
                        </div>
                    </div>

                    <div className='image-slide' >
                        <div className='images' >
                            <img className='' src={doctor1} width='400px' height='400px'/>
                        </div>
                        <div className='image-text' max-width='400px' height='400px'>
                            <h3>Laboratory</h3>
                            <p style={{width:'400px'}}>Cum sociis natoque penatibus 
                            et magnis dis parturient montesmus. 
                            Pro vel nibh et elit mollis commodo et nec augueique
                            </p>
                        </div>
                    </div>

                    <div className='image-slide' >
                        <div className='images' >
                            <img className='' src={doctorsnew2} width='400px' height='400px'/>
                        </div>
                        <div className='image-text' max-width='400px' height='400px'>
                            <h3>Laboratory</h3>
                            <p style={{width:'400px'}}>Cum sociis natoque penatibus 
                            et magnis dis parturient montesmus. 
                            Pro vel nibh et elit mollis commodo et nec augueique
                            </p>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Service
