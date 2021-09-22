import React from 'react'
import { Link } from 'react-router-dom'
import './coloured.css'

const coloured = () => {
    return (
        <div>
            <div className='Color row'>
                <div className='column1 col-md-4 col-sm-12'>
                    <h3>Top Doctors</h3>
                    <p className='colored-text'>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
                    <button><Link className='button-link'>Read More</Link></button>
                </div>
                <div className='column2 col-md-4 col-sm-12'>
                    <h3>Top Doctors</h3>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
                    <button><Link className='button-link'>Read More</Link></button>
                </div>
                <div className='column3 col-md-4 col-sm-12'>
                <h3 style={{fontWeight: '400'}}>Opening hours</h3>
                    <div className='Monday'>
                        <p>Monday-Friday : </p>
                        <p style={{paddingLeft:'5px'}}> 8:00-17:00</p>
                    </div>
                    <div className='Saturday'>
                        <p>Saturday : </p>
                        <p style={{paddingLeft:'5px'}}> 9:30-17:30</p>
                    </div>
                    <div className='Sunday'>
                        <p>Sunday : </p>
                        <p style={{paddingLeft:'5px'}}> 9:30-15:00</p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default coloured
