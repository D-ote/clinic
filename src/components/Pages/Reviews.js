import React from 'react'
import working from '../../Images/working.jpg'
import './review.css'
const reviews = () => {
    return (
        <div>
            <section id="reviews" style={{backgroundImage:`url(${working})`,
             backgroundPosition: 'center',
             backgroundSize: 'cover', 
             width:'100%', 
             height:'600px' 
             }}>
            
              <div className='heading'>
                <p style={{fontSize:'20px', paddingTop:'15px'}}>Testimonials</p>
                <h3 >What our Clients say</h3>
              </div>
          
          <div class="row">
            <div class=" text-center col-md-4 ">
              <div class="profile">
                <div className='image-title' style={{backgroundColor:' #3FB8D7'}}>
                    <img src={working} width='100px' height='100px' style={{margin:'0',padding:'0'}}/>
                    <h3 >Adama Aina <span>Lecturer</span></h3>
                </div>
                    <blockquote>
                     Lorem ipsum, dolor sit amet consectetur adipisicing 
                     elit. In odio, voluptatibus, quo, molestiae quam est 
                     corporis eos illum animi nobis et cum dolore a deleniti? 
                     Aut ea consequuntur quae eius.
                    </blockquote>
              </div>
          </div>

          <div class="  text-center col-md-4">
            <div class="profile">
            <div className='image-title' style={{backgroundColor:'#0292CE'}}>
              <img src={working} width='100px' height='100px' />
              <h3 >Jimmy Akin <span>Businessman</span></h3>
              </div>
              <blockquote>
                Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. In odio, voluptatibus, quo, molestiae quam est 
                corporis eos illum animi nobis et cum dolore a deleniti? 
                Aut ea consequuntur quae eius.
              </blockquote>
                
            </div>
        </div>  

        <div class="  text-center col-md-4">
          <div class="profile">
          <div className='image-title' style={{backgroundColor:'#3065B5'}}>
            <img src={working} width='100px' height='100px' />
            <h3> Fiona Bane <span>Painter</span></h3>
            </div>
            <blockquote>
              Lorem ipsum, dolor sit amet consectetur adipisicing 
              elit. In odio, voluptatibus, quo, molestiae quam est 
              corporis eos illum animi nobis et cum dolore a deleniti? 
              Aut ea consequuntur quae eius.
            </blockquote>
             
          </div>
      </div>

          </div>
      </section>
        </div>
    )
}

export default reviews
