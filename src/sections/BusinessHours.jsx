import React from 'react'
import './business.css'
import phone from "../assets/phone.png"
function BusinessHours() {
  return (
    <div className='container-wrapper'>
        <div className="business-title-wrapp">
        <h2 className="testimonial-title">Business Hours</h2>
        <img src={phone} alt="" />
        </div>
    <div className="container">
      <div className="business-hours-cont">
        <div className="time-wrapper">
        <div className="left-right-hold">
           <div className="time-left">
               <div className="time-box-cont">
                <div className="time-box">
                Sunday: 8:10 - 20:00
                </div>
               </div>
               <div className="time-box-cont">
                <div className="time-box">
                Tuesday: 8:10 - 20:00
                </div>
               </div>
               <div className="time-box-cont">
                <div className="time-box">
                Thursday: 8:10 - 20:00
                </div>
               </div>

           </div>
           <div className="time-right">
           <div className="time-box-cont">
                <div className="time-box">
                Monday: 8:10 - 20:00
                </div>
               </div>
               <div className="time-box-cont">
                <div className="time-box">
                Wednesday: 8:10 - 10:00
                </div>
               </div>
               <div className="time-box-cont">
                <div className="time-box">
                Friday: 8:10 - 20:00
                </div>
               </div>
           </div>
           </div>
           <div className="time-bottom">
           <div className="time-box-cont">
                <div className="time-box">
                Saturday: Closed
                </div>
               </div>
           </div>
           </div>
      </div>

    </div>
    </div>
  )
}

export default BusinessHours