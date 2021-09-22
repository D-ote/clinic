import React from 'react'
import Home from '../../Images/Home.jpg'
import {Carousel} from 'react-bootstrap'




const Services = () => {
    return (

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
                
            <div className='all-comp' >
                <div className='comp'>
                    <div className='comp-text'>
                        <p>Innovation</p>
                        <h4>Services</h4>
                    </div>
                    <div className='icons'>
                        {/* <AiFillBackward  className='icon-back'/><AiFillForward className='icon-forward' /> */}
                    </div>
            </div>  
                 

            <Carousel className='' style={{}}>

            <Carousel.Item className='image-slide'
            style={{display:'flex'}}
            >
  
    <img
   
      className="d-block w-100"
      src={Home}
      alt="First slide"
      width='400px'
      height='700px'
    />
    
    <Carousel.Caption className='image-text'>
      <h3>First slide label</h3>
      <p>'Cum sociis natoque penatibus et magnis dis parturient montesmus Pro vel nibh et elit mollis commodo et nec augueique'</p>
    </Carousel.Caption>

    <img
   
      className="d-block w-100"
      src={Home}
      alt="First slide"
      width='400px'
      height='700px'
    />
    
    <Carousel.Caption className='image-text'>
      <h3>First slide label</h3>
      <p>'Cum sociis natoque penatibus et magnis dis parturient montesmus Pro vel nibh et elit mollis commodo et nec augueique'</p>
    </Carousel.Caption>

    <img
   
      className="d-block w-100"
      src={Home}
      alt="First slide"
      width='400px'
      height='700px'
    />
    
    <Carousel.Caption className='image-text'>
      <h3>First slide label</h3>
      <p>'Cum sociis natoque penatibus et magnis dis parturient montesmus Pro vel nibh et elit mollis commodo et nec augueique'</p>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item className='image-slide'
  style={{maxWidth:'400px'}}
>

  <img
 
    className="d-block w-100"
    src={Home}
    alt="First slide"
    width='400px'
    height='400px'
  />
  
  <Carousel.Caption className='image-text'>
    <h3>First slide label</h3>
    <p>'Cum sociis natoque penatibus et magnis dis parturient montesmus Pro vel nibh et elit mollis commodo et nec augueique'</p>
  </Carousel.Caption>
</Carousel.Item>

  <Carousel.Item   className='image-slide'
    style={{maxWidth:'400px'}}
  >
  
    <img
   
      className="d-block w-100"
      src={Home}
      alt="First slide"
      width='400px'
      height='400px'
    />
    
    <Carousel.Caption className='image-text'>
      <h3>First slide label</h3>
      <p>'Cum sociis natoque penatibus et magnis dis parturient montesmus Pro vel nibh et elit mollis commodo et nec augueique'</p>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item  className='image-slide'
    style={{maxWidth:'400px'}}
  >
  
    <img
   
      className="d-block w-100"
      src={Home}
      alt="First slide"
      width='400px'
      height='400px'
    />
    
    <Carousel.Caption className='image-text'>
      <h3>First slide label</h3>
      <p>'Cum sociis natoque penatibus et magnis dis parturient montesmus Pro vel nibh et elit mollis commodo et nec augueique'</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item  className='image-slide'
    style={{maxWidth:'400px'}}
  >
  
    <img
   
      className="d-block w-100"
      src={Home}
      alt="First slide"
      width='400px'
      height='400px'
    />
    
    <Carousel.Caption className='image-text'>
      <h3>First slide label</h3>
      <p>'Cum sociis natoque penatibus et magnis dis parturient montesmus Pro vel nibh et elit mollis commodo et nec augueique'</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item  className='image-slide' style={{maxWidth:'400px'}}>
  
    <img
   
      className="d-block w-100"
      src={Home}
      alt="First slide"
      width='400px'
      height='400px'
    />
    
    <Carousel.Caption className='image-text' style={{backgroundColor:'white'}}>
      <h3>First slide label</h3>
      <p>'Cum sociis natoque penatibus et magnis dis parturient montesmus Pro vel nibh et elit mollis commodo et nec augueique'</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
 </div> 
  

  </div>
    )
}

export default Services
