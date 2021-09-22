import React from 'react'
import {Carousel} from 'react-bootstrap'
import Home from '../../Images/Home.jpg'
import working1 from '../../Images/working1.jpg'
import doctor1 from '../../Images/doctor1.jpg'


const Main = () => {
  return (
    <div>
     
      <Carousel className='Carousel'>

  <Carousel.Item
    
  >
  
    <img
   
      className="d-block w-100"
      src={working1}
      alt="First slide"
      width='100%'
      height='700px'
    />
    
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={doctor1}
      alt="Second slide"
      width='100%'
      height='700px'
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Home}
      alt="Third slide"
      width='100%'
      height='700px'
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  )
}

export default Main
