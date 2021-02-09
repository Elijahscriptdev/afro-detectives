import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./Homepage.css";
import apk from "../assets/afro.apk";

const Homepage = () => {
  return (
    <div>
      <Header />

      <div className='hero-section'>
        <div className='hero-img'>
          <img
            className='img-fluid'
            src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1612809665/WhatsApp_Image_2021-02-08_at_11.48.34_zdg64q.jpg'
            alt='img'
          />
        </div>
        <div className='hero-text'>
          <div className='content'>
            <h1 className=''>Black Ace Games</h1>
            <p>We take fun seriously</p>
          </div>
        </div>
      </div>

      <div className='download-section'>
        <div className='download-text'>
          <div className='download-content'>
            <h1 className=''>Afro Detectives</h1>
            <p>Download our newest game</p>
            <a href={apk} target="_blank" rel="noopener noreferrer">click to download</a>
          </div>
        </div>
        <div className='download-img'>
          <img
            className='img-fluid'
            src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1612794154/maingameimage_bvafxb.png'
            alt='img'
          />
        </div>
      </div>

      <div className='games'>
        <h1 className=''>Other Games</h1>
        <div className='games-img'>
          <div>
            <img
              className='img-fluid'
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1612794155/sceenshot1_ubriay.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              className='img-fluid'
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1612794156/screenshot2_ew883e.png'
              alt='img'
            />
          </div>
          <div>
            <img
              className='img-fluid'
              src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1612794154/team3_ycuw20.jpg'
              alt='img'
            />
          </div>
        </div>
      </div>

      <h1 className='con'>Contact Us</h1>

      <div className='contact-info'>
        <div className='cards'>
          <i className='icon fas fa-envelope'></i>
          <div className='card-content'>
            <h3>Email</h3>
            <span>blackacestudio3@gmail.com</span>
          </div>
        </div>

        <div className='cards'>
          <i className='icon fas fa-phone'></i>
          <div className='card-content'>
            <h3>Phone Number</h3>
            <span>08110581032</span>
          </div>
        </div>

        <div className='cards'>
          <i className='icon fas fa-map-marker-alt'></i>
          <div className='card-content'>
            <h3>Location</h3>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
