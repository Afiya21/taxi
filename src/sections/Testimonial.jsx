import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
// Import images
import user1 from "../assets/image1.jpg";
import user2 from "../assets/image22.png";
import traficlight from "../assets/traficlight.png"

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. lorem20Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. lorem20",
      name: "Shane Watson",
      image: user1,
    },
    {
      id: 2,
      text: "Great service! Highly recommended for their professionalism and attention to detail. Keep it up! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. lorem20 Great service! Highly recommended for their professionalism and attention to detail. Keep it up! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. lorem20 Great service! Highly recommended for their professionalism and attention to detail. Keep it up! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. lorem20",
      name: "John Doe",
      image: user2,
    },
    {
      id: 3,
      text: "I am impressed by the quality of service. The team is very professional and always ready to help.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. lorem20",
      name: "Jane Smith",
      image: user1,
    },
  ];

  return (
    <div className='container-wrapper'>
      <div className="testi-title-wrap">
      <h2 className="testimonial-title">Testimonial</h2>
      <img src={traficlight} alt="" />
      </div>
      <div className="container">
    <div className="testimonial-container">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <p className="testimonial-text">{testimonial.text}</p>
            <div className="testimonial-author">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="author-image"
              />
              <span className="author-name">{testimonial.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </div>
  );
};

export default Testimonial;
