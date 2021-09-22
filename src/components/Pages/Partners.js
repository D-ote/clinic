import React from 'react'
import partner5 from '../../Images/partner5.png'
import partner6 from '../../Images/partner6.png'
import partner6new from '../../Images/partner6new.png'

import './Partners.css'

const Partners = () => {
    return (
        <div className='partners'>
        <h3>Our Partners</h3>
            <img src={partner5} width='200px' height='200px' style={{padding:'25px'}}/>
            <img src={partner6} width='200px' height='200px' style={{padding:'25px'}}/>
            <img src={partner6new} width='200px' height= '200px' style={{padding:'25px'}}/>
            <img src={partner5} width='200px' height='200px' style={{padding:'25px'}}/>
        </div>
    )
}

export default Partners
