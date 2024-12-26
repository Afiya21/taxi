import React from 'react'
import './Contact.css'
import { Input, Button } from "antd";
import car from "../assets/product1.png"
import taxi from "../assets/taxi.png"
const { TextArea } = Input;
function Contact() {
  return (
    <div className='container-wrapper'>
    <div className="container">
      {/* Contact Us Section */}
      <div className="contact-section">

        <h2>Contact Us</h2>


        <form className="contact-form">
          <Input
            placeholder="Full Name"
            className="form-input"
            size="large"
          />
          <Input
            placeholder="Email Address"
            className="form-input"
            size="large"
          />
          <Input
            placeholder="Phone Number"
            className="form-input"
            size="large"
          />
          <TextArea
            placeholder="Your Message"
            className="form-textarea"
            rows={4}
          />
          <div className='submit-btn'>
          <Button type="primary" className="submit-button">
            Send Message
          </Button>
          </div>
        </form>
      </div>

      {/* Create Your VCard Section */}
      <div className="vcard-section">
      <div className="contact-title-wrap">
        <h2>Create Your VCard</h2>
        <img src={car} alt="" />
        </div>
        <div className="vcard-container">
               <div className="vcard-input">
                <div className="vcar-inner">
                  <p>https://vcards.infyom.com/marlonbrasilsfjkj/fskfjskfaksfjkjjja</p>
                </div>
               </div>
          {/* <div className="time-box-cont">

                <div className="time-box vcard-input">
                https://vcards.infyom.com/marlonbrasil
                </div>
               </div> */}
          <div className='submit-btn'>
          <Button type="primary" className="add-contact-button">
            Add to Contact
          </Button>

          </div>

        </div>
        <div className='fadded-text'>
          <img src={taxi} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact