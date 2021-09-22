import React from 'react'
import  {servicedata}  from './servicedata'
import Service from './Service'
import Slider from 'react-slick'
import 'react-bootstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Service.css'

let settings={
    infinite: false,
    speed:1000,
    arrows: true,
    slidesToShow:2,
    slidesToScroll:3,
}

const Serviceapp = () => {
    const servicecomponent = () => servicedata.map(services=>(
        <Slider {...settings}>
        <Service key={services.id} image={services.image} title={services.title} about={services.about}/>

        </Slider>
    )

    )



    return (
        <div>
            {servicecomponent}
        </div>
    )
}

export default Serviceapp
