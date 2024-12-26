import React from 'react';
import { Carousel } from 'antd';// Import Ant Design styles
import './Gallery.css'; // Custom CSS for the gallery
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/hero.jpg';
import image3 from '../assets/image22.png';
import gallery from "../assets/gallery2.png";
import galleryimage from "../assets/taxi10.png";
import contactimg from "../assets/contact1-removebg-preview.png";
import { IoIosMail } from "react-icons/io";
import { FaPhone,  FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const images = [
    { id: 1, src: image1, alt: "Passengers walking to taxi" },
    { id: 2, src: image2, alt: "Passengers sitting inside taxi" },
    { id: 3, src: image3, alt: "Businessman working in taxi" },
  ];

    return (
        <div className='container-wrapper'>
            <div className="container">
    {/* Blog Section */}
    <div className="blog-section">
      <div className='cont-wrap'>
        <div className="cont-title-hold">
      <h2>Contact</h2>
       <img src={contactimg} alt="" />
      </div>
       <div className='cont-wrapper'>
        <div className="cont-list">
            <div className="cont1">

                <IoIosMail className='cont-icon'/>
                <p>bracstonreyes@gmail.com</p>
                <BsCalendarDateFill className='cont-icon'/>
                <p>4 December 1995</p>
            </div>
            <div className="cont1">
            <FaPhone className='cont-icon'/>
            <p>+49 95864 12484</p>
                < FaLocationDot className='cont-icon'/>
                <p>Berlin -Germany</p>
            </div>
            <div className="cont1">
                <img src={gallery} alt="" />
            </div>
        </div>

       </div>
       </div>
    </div>

    {/* QR Code Section */}
    <div className="qr-section">
      <div className="galley-header-cont">
      <h2>Gallery</h2>
      <img src={galleryimage} alt="" />
      </div>
      <div className="qr-containers">
      <div className="gallery-containers">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="image-slide">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </Slider>
    </div>

      </div>
    </div>
  </div>

      </div>
    );
  };

  export default Gallery;
