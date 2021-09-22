import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillBackward, AiFillForward} from 'react-icons/ai'
import Home from '../../Images/Home.jpg'
import './More.css'

const   More = () => {
    return (
    <div>
        <div className='more'>
                
            <div className='all-comp'>
                <div className='comp'>
                    <div className='comp-text'>
                        <p>Latest now</p>
                        <h4 style={{color:'#787878'}}>Be the first to read</h4>
                    </div>
                    <div className='icons'>
                        <AiFillBackward  className='comp-icons'/><AiFillForward className='comp-icons' />
                    </div>
            </div>
                <div className='all-images '>
                    <div className='image-slide'>
                        <div className='images'>
                            <img src={Home} width='400px' height='400px'/>
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
                            <img className='' src={Home} width='400px' height='400px'/>
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
                            <img className='' src={Home} width='400px' height='400px'/>
                        </div>
                        <div className='image-text' max-width='400px' height='400px'>
                            <h3>Laboratory</h3>
                            <p style={{width:'400px'}}>Cum sociis natoque penatibus 
                            et magnis dis parturient montesmus. 
                            Pro vel nibh et elit mollis commodo et nec augueique</p>
                        </div>
                    </div>
{/* 
                    <div className='image-slide' >
                        <div className='images' >
                            <img className='' src={Home} width='400px' height='400px'/>
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
                            <img className='' src={Home} width='400px' height='400px'/>
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
                            <img className='' src={Home} width='400px' height='400px'/>
                        </div>
                        <div className='image-text' max-width='400px' height='400px'>
                            <h3>Laboratory</h3>
                            <p style={{width:'400px'}}>Cum sociis natoque penatibus 
                            et magnis dis parturient montesmus. 
                            Pro vel nibh et elit mollis commodo et nec augueique
                            </p>
                        </div>
                    </div> */}

                    

                </div>
            </div>
            <div className='more-img' style={{margin:'30px'}}>
                <img src={Home} height='700px' width='400px'/>
            </div>
        </div>
    </div>
    
    )
}

export default More
