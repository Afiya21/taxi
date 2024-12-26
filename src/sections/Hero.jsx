import React from "react";
import "./hero.css";
import cover from "../assets/hero2.jpg"
import pp from "../assets/image1.jpg"
import { FaFacebookF, FaTwitter,FaLinkedinIn, FaInstagram, FaWhatsapp  } from "react-icons/fa6";
import heroline from "../assets/heroline.png"
import image1 from "../assets/image1.jpg"
import pointer from "../assets/pointer.png"
const Hero = () => {
  return (
    <>
    <div className="hero-wrapper">
        <div className="hero-sub-cont">
          <div className="hero-left-right-cont">
          <div className="her-left">
            <h1>
            Jeff Murray
            </h1>
              <h2>
              Taxi Service
              </h2>
              <img src={pointer} alt="" />
          </div>
          <div className="hero-right">
            <hero className="hero-image">
              <img src={image1}alt="" />
            </hero>
          </div>
          </div>
          <div className="hero-bottom">
            <div className="hero-sec-wrapp">
            <div className="soc-icons">
            < FaFacebookF className="ico"/>
            <FaTwitter className="ico"/>
            <FaInstagram className="ico"/>
            <FaLinkedinIn className="ico"/>
            <FaWhatsapp className="ico"/>
            </div>
            <img src={heroline} alt="" />
            </div>
            <div className="soc-abt">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi possimus quam dolore cum aliquam aspernatur debitis, nesciunt, harum nisi iusto itaque nam in rem ullam est. Libero adipisci vero consequuntur nam maxime nemo eum dolor, dicta quos magnam aperiam quibusdam cum veritatis nostrum cumque, animi illum impedit hic atque voluptatum nulla. Consequuntur ad expedita eaque qui itaque facilis minus reiciendis?</p>
            </div>
          </div>

        </div>
    </div>

    </>
  );
};

export default Hero;
