import React from 'react'
import { Link } from 'react-router-dom'
import './Theme.css'
import {BiHealth} from 'react-icons/bi'
import {RiHeartPulseLine} from 'react-icons/ri'
import {GiHealthIncrease} from 'react-icons/gi'
import {AiOutlineMedicineBox} from 'react-icons/ai'
import {RiPulseFill} from 'react-icons/ri'


const Theme = () => {
    return (
        <div>
            <div className='theme-text'>
                <h3>Awesome Theme for Medical and Health Websites</h3>
                <p>Medical Clinic WordPress theme was created to offer a perfect solution for medical websites.</p>
            </div>

            <div className='row'>
                <div className='Medical-treatment col-md-3'>
                    <Link><RiHeartPulseLine className='med-icon'/></Link>
                    <h4>Medical Treatment</h4>
                    <p>Cum sociis natoque penatibus et magnis
                     dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>
                </div>

                <div className='Emergency col-md-3'>
                    <Link><GiHealthIncrease className='emergency-icon'/></Link>
                    <h4>Medical Treatment</h4>
                    <p>Cum sociis natoque penatibus et magnis
                     dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>
                </div>
                <div className='Medical-prof col-md-3'>
                    <Link><AiOutlineMedicineBox className='prof-icon'/></Link>
                    <h4>Medical professionals</h4>
                    <p>Cum sociis natoque penatibus et magnis
                     dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>
                </div>
                <div className='Qualified-doctors col-md-3'>
                    <Link><RiPulseFill className='doc-icon'/></Link>
                    <h4>Qualified Doctors</h4>
                    <p>Cum sociis natoque penatibus et magnis
                     dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augueique</p>
                </div>

            </div>
        </div>
    )
}

export default Theme
