import React from 'react'
import './service.css'
import { DatePicker, Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import car1 from '../assets/car11.png';
import car2 from '../assets/car22.png';
import airport from "../assets/airport1.png";
import rides from "../assets/rides2.png"
import appoint from "../assets/timeline1.png"
import product from "../assets/product1.png"
function OurService() {

  return (
    <div className='container-wrapper'>
    <div className="container">
    <section className="services">
      <div className='service-title'>
      <h2 className="section-title">Our Services</h2>
      </div>
      <div className="service-boxes">
        <div className="service-box">
          <div className="icon">
            {/* ✈️ */}
            <img src={airport} alt="" />
          </div>
          <h3>Airport Transfers</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when...</p>
        </div>
        <div className="service-box">
          <div className="icon">
            {/* 📍 */}
            <img src={rides} alt="" />
            </div>
          <h3>Scheduled Rides</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when...</p>
        </div>
      </div>
    </section>

    <section className="appointment">
    <div className='service-title'>
      <div className="appointment-cont-header">
      <h2 className="section-title">
        Make an Appointment
        </h2>
        <img src={appoint} alt="" />
        </div>
      </div>
      <div className="appointment-form">
        <div className="app-flex-cont">
        <div className="left-app">
          <div className="date-label">
        <label>Date:</label>
        </div>
        <div className="hour-label">
        <label>Hour:-</label>
        </div>

        </div>
        <div className="right-app">
          <div className="date-input">
          <DatePicker suffixIcon={<CalendarOutlined />} className="date-picker" />
          </div>
          <div className="hour-input">
          <div className="hour-holder">
        <div className="hour-selector">
          <div className='hour1'>
          <Button className="hour-button">8:10 - 20:00</Button>
          <Button className="hour-button">8:10 - 20:00</Button>
          </div>
          <div className='hour1'>
          <Button className="hour-button">8:10 - 20:00</Button>
          <Button className="hour-button">8:10 - 20:00</Button>
          </div>


        </div>
        <div className="button-hold">
        <Button type="primary" className="submit-button btn-appoint">Make an Appointment</Button>
        </div>
        </div>
          </div>
        </div>
        </div>




      </div>
    </section>

    <section className='product'>
    <div className='service-title'>
      <div className="product-wrapp">
    <h2 className="section-title">Products</h2>
    <img src={product} alt="" />
    </div>
    </div>
    <div className='product-cont'>

      <div className='product-box-cont'>
    <div className="service-box">
          <div className='product-type'>
             <div className='product-image'>
              <img src={car1} alt='Product' />
             </div>
             <div className='product-desc'>
              <h2>Cabsy Regular</h2>
              <p>1 - 4 Passenger</p>
             </div>
             <div className='product-price'>
              <h3>
                $19.00
              </h3>
             </div>
          </div>
        </div>
        <div className="service-box">
        <div className='product-type'>
             <div className='product-image'>
              <img src={car2} alt='Product' />
             </div>
             <div className='product-desc'>
              <h2>Cabsy XL</h2>
              <p>1 - 4 Passenger</p>
             </div>
             <div className='product-price'>
              <h3>
                $25.00
              </h3>
             </div>
          </div>

        </div>
        </div>
        </div>
    </section>
  </div>
  </div>
  )
}

export default OurService