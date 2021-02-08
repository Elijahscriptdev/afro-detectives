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
              xs=12 md=8
            </Col>
          </Row>
        </div>

        <div className='games m-5'>
          <h1 className='text-center my-5'>Our Games</h1>
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

      <div className='team m-5'>
          <h1 className='text-center my-5'>Our Games</h1>
          <Row>
            <Col xs={6} md={4}>
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610066864/Rectangle_4_w64mko.png'
                alt='img'
              />
            </Col>
            <Col xs={6} md={4}>
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610066864/Rectangle_4_w64mko.png'
                alt='img'
              />
            </Col>
            <Col xs={6} md={4}>
              <img
                className='img-fluid'
                src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1610066864/Rectangle_4_w64mko.png'
                alt='img'
              />
            </Col>
          </Row>
        </div>

      <div className='contact m-5'>
        <div class='row'>
          <div class='col-6 bg-danger'>
            <form class=''>
              <h1 class='text-center my-5'>Contact us</h1>

              <div class=''>
                <label class='col-md-3 control-label' for='name'>
                  Name
                </label>
                <div class='col-md-12'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Your name'
                    class='form-control'
                  />
                </div>
              </div>

              <div class='form-group'>
                <label class='col-md-3 control-label' for='email'>
                  Email
                </label>
                <div class='col-md-12'>
                  <input
                    id='email'
                    name='email'
                    type='text'
                    placeholder='Your email'
                    class='form-control'
                  />
                </div>
              </div>

              <div class='form-group'>
                <label class='col-md-3 control-label' for='message'>
                  Your message
                </label>
                <div class='col-md-12'>
                  <textarea
                    class='form-control'
                    id='message'
                    name='message'
                    placeholder='Please enter your message here...'
                    rows='5'
                  ></textarea>
                </div>
              </div>

              <div class='form-group'>
                <div class=''>
                  <button type='submit' class='btn btn-primary btn-lg'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div class='col-6 bg-success'></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
