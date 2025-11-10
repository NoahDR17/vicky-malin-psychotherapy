import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <Container className="contact-page my-5">
      <h1 className="text-center mb-4">Contact Me</h1>

      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="contact-info mb-4">
            <p>
              <strong>Address:</strong><br />
              Southport Town Centre Consulting Room<br />
              Unit 2, 19 Anchor Street, Southport, PR9 0UT
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:victoriamalin.counselling@gmail.com">victoriamalin.counselling@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong><br />
              <a href="tel:+4407378382938">(+44) 07378 382938</a>
            </p>
          </div>

          <div className="map-container">
            <iframe 
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.5149907367177!2d-3.019135684220558!3d53.64518598008516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3b64ec75b41%3A0x1b72a1c3e5efc0e2!2sUnit%202%2C%2019%20Anchor%20St%2C%20Southport%20PR9%200UT%2C%20UK!5e0!3m2!1sen!2sus!4v1616581401988!5m2!1sen!2sus" 
              width="100%" 
              height="300" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;