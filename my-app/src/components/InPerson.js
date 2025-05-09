import React, { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import '../styles/InPerson.css';

const InPerson = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Container className="inperson-services my-5">
      {/* Header */}
      <header className="services-header text-center mb-4">
        <h1>SERVICES</h1>
        <h2>IN-PERSON</h2>
      </header>

      {/* Location Section with Address and Google Map */}
      <section className="service-location mb-4">
        <h3 className="text-center">Southport Town Centre Consulting Room</h3>
        <p className="address-text text-center">
          Unit 2, 19 Anchor Street, Southport, PR9 0UT, England
        </p>

        {/* Relative container so the absolute-positioned spinner can center properly */}
        <div className="map-container position-relative" style={{ minHeight: 250 }}>
          {isLoading && (
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
              style={{ zIndex: 10 }}
            >
              <Spinner animation="border" role="status" variant="dark">
                <span className="visually-hidden">Loading map...</span>
              </Spinner>
            </div>
          )}

          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.5149907367177!2d-3.019135684220558!3d53.64518598008516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3b64ec75b41%3A0x1b72a1c3e5efc0e2!2sUnit%202%2C%2019%20Anchor%20St%2C%20Southport%20PR9%200UT%2C%20UK!5e0!3m2!1sen!2sus!4v1616581401988!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            onLoad={handleIframeLoad}
          />
        </div>
      </section>

      {/* In-Person Therapy Description */}
      <section className="service-description mb-4">
        <h3>In-Person Therapy Sessions in a Comfortable, Welcoming Space</h3>
        <p>
          I see most clients face-to-face...
        </p>
        {/* ...rest of your content... */}
      </section>

      {/* Home Visits Section */}
      <section className="home-visits mb-4">
        <h3>Home Visits – Therapy in the Comfort of Your Own Space</h3>
        <p>
          If you’re limited by accessibility...
        </p>
      </section>

      {/* Fees Section */}
      <section className="fees mb-4">
        <h3>Fees</h3>
        <ul>
          <li>Initial 30 minute consultation - Free</li>
          <li>Individual 60 minute sessions - £50</li>
          <li>Individual 90 minute session - £75</li>
        </ul>
      </section>

      {/* Contact Button */}
      <section className="contact-call text-center mb-4">
        <Button href="/contact" variant="primary">Contact Me</Button>
      </section>

      {/* Office Photos Section */}
      <section className="office-photos mb-4">
        <h3 className="text-center">Office Photos</h3>
        <Row className="g-3">
          <Col md={4}>
            <img
              src="https://res.cloudinary.com/du7daaai2/image/upload/v1734446068/default_post_w4tzg1.jpg"
              alt="Office 1"
              className="img-fluid"
            />
          </Col>
          <Col md={4}>
            <img
              src="https://res.cloudinary.com/du7daaai2/image/upload/v1734446068/default_post_w4tzg1.jpg"
              alt="Office 2"
              className="img-fluid"
            />
          </Col>
          <Col md={4}>
            <img
              src="https://res.cloudinary.com/du7daaai2/image/upload/v1734446068/default_post_w4tzg1.jpg"
              alt="Office 3"
              className="img-fluid"
            />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default InPerson;
