import React from 'react'
import './Blog.css'
import { Carousel, Button } from "antd";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image22.png";
import blog from "../assets/blogline.png"
import Qr from "../assets/images.png";
import qrmap from "../assets/qrmap.png"
function Blog() {
  return (
    <div className='container-wrapper'>
    <div className="container">
    {/* Blog Section */}
    <div className="blog-section">
      <div className="blog-title-wrap">
      <h2>Blog</h2>
      <img src={blog} alt="" />
      </div>
      <Carousel autoplay className="slider">
        <div className="slide">
          <img
            src={image1}
            alt="Image 1"
            className="slide-image"
          />
          <div className="slide-content">
            <h3>Exploring Eco-Friendly Transportation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, veritatis minus. Iusto, repellendus at. Quo eligendi omnis ex tenetur praesentium numquam nemo commodi quaerat, sunt impedit tempore adipisci culpa, rerum molestias. Impedit explicabo voluptate similique et enim facere, ipsam consequuntur illum maxime aspernatur maiores reiciendis odit veritatis quae, iusto dolore, corrupti assumenda a quod tempore animi id? Iste dicta accusantium optio dolores molestias. Pariatur, velit placeat. Provident facilis fuga suscipit?
            </p>
          </div>
        </div>
        <div className="slide">
          <img
            src={image2}
            alt="Sustainable Travel"
            className="slide-image"
          />
          <div className="slide-content">
            <h3>Sustainable Travel</h3>
            <p>
              Discover innovative ways to travel while reducing your carbon
              footprint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda nemo distinctio praesentium asperiores natus nihil minima! Provident ab non consectetur maiores adipisci illo. Cum dolores quo omnis nesciunt doloremque, beatae libero possimus ullam impedit, iusto provident quibusdam esse vitae magni fugit odio maiores, quas et similique laborum veritatis dignissimos! Alias cum porro quaerat ab dolores? Labore dolorum corporis consectetur similique reprehenderit, molestiae magni fuga vero obcaecati eos autem fugiat.
            </p>
          </div>
        </div>
      </Carousel>
    </div>

    {/* QR Code Section */}
    <div className="qr-section">
      <div className="qr-title-wrapp">
      <h2>QR Code</h2>
      <img src={qrmap} alt="" />
      </div>
      <div className="qr-container">
        <div className='profile-pro'>
        <img
          src={image1}
          alt="User Profile"
          className="profile-picture"
        />
        </div>
        <div className='qr-code-pro'>
        <img
          src={Qr}
          alt="QR Code"
          className="qr-code"
        />
        </div>
        <div className='blog-btn'>
        <Button type="primary" className="download-button">
          Download My QR Code
        </Button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Blog