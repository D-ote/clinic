import React from "react";
import "./Doctors.css";
import Home from "../../Images/Home.jpg";
import doctor1 from "../../Images/doctor1.jpg";
import doctorsnew from "../../Images/doctorsnew.jfif";
import { Link } from "react-router-dom";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";

const Doctors = () => {
  return (
    <div className="entirety row">
                    <div className="humanResourceCards">
              <div className="card-group">
                <div className="card hrCard">
                  <img className="card-img-top" src={Home} alt="hr employee management" />
                  <div className="card-body hrBody">
                    <h5 className="card-title">Employee Management</h5>
                    <p className="card-text">
                      From Hiring &#38; Onboarding to Retiring, the Resource Edge Employee Management module eliminates
                      all the complexities &#38; paperwork involved in managing your team.
                    </p>
                  </div>
                </div>
                <div className="card hrCard cardShadow">
                  <img className="card-img-top" src={doctor1} alt="hr performance management" />
                  <div className="card-body hrBody">
                    <h5 className="card-title">Performance Management</h5>
                    <p className="card-text">
                      Manage and track employee performance with our easy-to-use tools for goal setting, performance
                      agreements and performance reviews.
                    </p>
                  </div>
                </div>
                <div className="card hrCard">
                  <img className="card-img-top" src={doctorsnew} alt="hr paid time off" />
                  <div className="card-body hrBody">
                    <h5 className="card-title">Paid time off</h5>
                    <p className="card-text">
                      Employees can request for paid time off, vacations, sick leaves or educational leaves and get
                      approvals all within Resource Edge. HR managers can equally ensure compliance.
                    </p>
                  </div>
                </div>
              </div>
              </div>
      {/* <div className="">
        <div className="Prof">
          <img src={Home} width="400px" height="400px" />
          <h3>Doctor Ritshak</h3>
          <p>Cardiologist</p>
          <blockquote>
            Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro
            vel nibh et elit mollis commodo et nec augueique
          </blockquote>
          <div className="mobile">
            <Link style={{ color: "#787878" }}>
              <AiOutlineMobile style={{ margin: "5px" }} />
              +2341234567
            </Link>
          </div>
          <div className="email">
            <Link style={{ color: "#787878" }}>
              <AiOutlineMail style={{ margin: "5px" }} />
              example@gmail.com
            </Link>
          </div>
        </div>
      </div> */}

      {/* <div className=' col-md-3'>

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
                
            </div> */}
    </div>
  );
};

export default Doctors;
