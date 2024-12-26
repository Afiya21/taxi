import React from 'react'
import './PageTest.css'
import hero3 from '../assets/hero3.png'
import image1 from '../assets/image1.jpg'
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { PiArrowBendLeftDownDuotone } from "react-icons/pi";
function PageTest() {
  return (
    <div className='page-test'>
        {/* hero section */}
        <div className='hero-section'>
            <div className="hero-title">
                <div>
                    <h1>Jeff Murray</h1>
                    <p>Taxi Service</p>
                    <div className='indicator'>
                    <PiArrowBendLeftDownDuotone className='hero-icon-indicator'/>
                    </div>
                    <div className='hero-icon-list'>
                       <FaFacebookF className='hero-icon' />
                          <FaWhatsapp className='hero-icon'/>
                            <FaLinkedinIn className='hero-icon'/>
                            <FaInstagram className='hero-icon'/>
                            <FaXTwitter className='hero-icon'/>

                    </div>
                    <p className='hero-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore exercitationem nobis cumque ducimus doloribus itaque accusantium quasi, architecto ea corporis ab facere iure incidunt deserunt dolor voluptas quisquam hic corrupti recusandae perferendis possimus asperiores porro tenetur vitae. Sed, perspiciatis illum.</p>
                </div>
                <div className="hero-image">
                    <img src={image1} alt="" />
                </div>
            </div>
        </div>
        {/* contact section */}
        <div className='contact-section'>
            contact section
        </div>

        {/* galarry
         */}
         {/* our service */}
         {/* products */}
         {/* testimonials */}
         {/* businnes hours */}
         {/* blog */}
         {/* qrcode */}
         {/* contact us */}

    </div>
  )
}

export default PageTest