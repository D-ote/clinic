import React from "react";
import "./Booking.css";

const Book = () => {
  return (
    <div className="booking-section">
      <div
        className="book-section row "
        style={{ background: "#fcfcfc", margin: "0", padding: "80px" }}
      >
        <div className="Booking col-md-6 col-sm-12">
          <div style={{ margin: "50px" }}>
            <h3>Book an Appointment</h3>

            <form className="appointment" width="100%">
              <div className="departments-one">
                <div style={{ margin: "10px" }}>
                  <select
                    className="departments"
                    placeholder="Select Departments"
                    width=""
                  >
                    <p>Select Departments</p>
                    <option>Pediatrics</option>
                    <option>Pediatrics</option>
                    <option>Pediatrics</option>
                    <option>Pediatrics</option>
                  </select>
                </div>

                <div style={{ margin: "10px" }}>
                  <select className="doctors" title="Select Doctors">
                    <p>Select Doctors</p>
                    <option>Dr Moses</option>
                    <option>Dr Nancy</option>
                    <option>Dr Okeke</option>
                    <option>Dr Chike</option>
                  </select>
                </div>
              </div>

              <div className="name-phone">
                <div style={{ margin: "10px" }}>
                  <input className="name" placeholder="Your Name"></input>
                </div>
                <div style={{ margin: "10px" }}>
                  <input
                    style={{}}
                    className="name"
                    placeholder="Phone"
                  ></input>
                </div>
              </div>
              <div className="mail-date">
                <div style={{ margin: "10px" }}>
                  <input className="name" placeholder="Email"></input>
                </div>
                <div style={{ margin: "10px" }}>
                  <input className="name" placeholder="Date"></input>
                </div>
              </div>
              <button
                style={{
                  padding: "20px",
                  margin: "15px",
                  color: "white",
                  width: "300px",
                  fontSize: "20px",
                }}
                type="submit"
              >
                Make an Appointment
              </button>
            </form>
          </div>
        </div>

        <div className="Questions col-md-6 col-md-6">
          <p style={{ textAlign: "left", fontSize: "18px", color: "#3FB8D7" }}>
            FAQ
          </p>
          <h3 style={{ textAlign: "left" }}>Have some questions?</h3>
          <div className="office-hours">
            <p className="office-header">What are your office hours?</p>
            <p className="">
              Cum sociis natoque penatibus et magnis dis parturient montesmus.
              Pro vel nibh et elit mollis commodo et nec augueique
            </p>
          </div>
          <div className="questions">
            <p className="questions-p">What is your appointment policy?</p>
            <p className="questions-p">What should I do if I'm ill?</p>
            <p className="questions-p">How do I refill my prescription?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
