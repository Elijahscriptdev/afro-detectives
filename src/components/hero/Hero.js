import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className='hero-section'>
      <Container>
        <div className='hero mb-5'>
          <Row>
            <Col xs={12} md={8}>
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1612809665/WhatsApp_Image_2021-02-08_at_11.48.34_zdg64q.jpg'
                alt='img'
              />
            </Col>
            <Col xs={6} md={4}>
              <div className='hero-start text-cente'>
                <div className='content'>
                  <h1 className=''>Black Ace Games</h1>
                  <p>We take fun seriously</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className='hero mb-5'>
          <Row>
            <Col xs={6} md={5}>
              <div className='hero-start'>
                <div className='contents'>
                  <h1 className=''>Afro Detectives</h1>
                  <p>Download our newest game</p>
                  <button>Download</button>
                </div>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1612794154/maingameimage_bvafxb.png'
                alt='img'
              />
            </Col>
          </Row>
        </div>

        <div className='games mb-5'>
          <h1 className='text-center my-5'>Trending Games</h1>
          <Row>
            <Col xs={6} md={4}>
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1612794155/sceenshot1_ubriay.jpg'
                alt='img'
              />
            </Col>
            <Col xs={6} md={4}>
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1612794156/screenshot2_ew883e.png'
                alt='img'
              />
            </Col>
            <Col xs={6} md={4}>
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1612794154/team3_ycuw20.jpg'
                alt='img'
              />
            </Col>
          </Row>
        </div>
      </Container>

      <h1 className='text-center con'>Contact Us</h1>

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
    </div>
  );
};

export default Hero;
