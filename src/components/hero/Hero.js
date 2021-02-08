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
        <div className='row'>
          <div className='col-6 bg-danger'>
            <form className=''>
              <h1 className='text-center my-5'>Contact us</h1>

              <div className=''>
                <label className='col-md-3 control-label'>
                  Name
                </label>
                <div className='col-md-12'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Your name'
                    className='form-control'
                  />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-3 control-label'>
                  Email
                </label>
                <div className='col-md-12'>
                  <input
                    id='email'
                    name='email'
                    type='text'
                    placeholder='Your email'
                    className='form-control'
                  />
                </div>
              </div>

              <div className='form-group'>
                <label className='col-md-3 control-label'>
                  Your message
                </label>
                <div className='col-md-12'>
                  <textarea
                    className='form-control'
                    id='message'
                    name='message'
                    placeholder='Please enter your message here...'
                    rows='5'
                  ></textarea>
                </div>
              </div>

              <div className='form-group'>
                <div className=''>
                  <button type='submit' className='btn btn-primary btn-lg'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className='col-6 bg-success'></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
