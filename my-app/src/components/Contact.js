import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css';
import iconMail from '../assets/icons/icon-mail.svg';
import iconPhone from '../assets/icons/icon-phone-ring.svg';
import iconLocation from '../assets/icons/icon-location-pin.svg';

const Contact = () => {
  return (
    <Container className="contact-page my-5">
      {/* Header */}
      <header className="contact-header text-center mb-5">
        <h1>CONTACT ME</h1>
      </header>

      {/* Contact Information Section */}
      <section className="contact-info-section mb-5">
        <div className="section-card">
          <h3 className="text-center mb-4">Get In Touch</h3>
          
          <Row className="justify-content-center">
            {/* Email */}
            <Col xs={12} md={4} className="mb-4">
              <div className="contact-item text-center">
                <a href="mailto:victoriamalin.counselling@gmail.com" className="contact-icon-link">
                  <img src={iconMail} alt="Email" className="contact-icon" />
                  <h4>Email</h4>
                  <p>victoriamalin.counselling@gmail.com</p>
                </a>
              </div>
            </Col>

            {/* Phone */}
            <Col xs={12} md={4} className="mb-4">
              <div className="contact-item text-center">
                <a href="tel:+4407378382938" className="contact-icon-link">
                  <img src={iconPhone} alt="Phone" className="contact-icon" />
                  <h4>Phone</h4>
                  <p>(+44) 07378 382938</p>
                </a>
              </div>
            </Col>

            {/* Address */}
            <Col xs={12} md={4} className="mb-4">
              <div className="contact-item text-center">
                <div className="contact-icon-link">
                  <img src={iconLocation} alt="Location" className="contact-icon" />
                  <h4>Address</h4>
                  <p>
                    Southport Town Centre<br />
                    Unit 2, 19 Anchor Street<br />
                    Southport, PR9 0UT
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section mb-5">
        <div className="section-card">
          <h3 className="text-center mb-4">Location</h3>
          <div className="map-container">
            <iframe 
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.5149907367177!2d-3.019135684220558!3d53.64518598008516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3b64ec75b41%3A0x1b72a1c3e5efc0e2!2sUnit%202%2C%2019%20Anchor%20St%2C%20Southport%20PR9%200UT%2C%20UK!5e0!3m2!1sen!2sus!4v1616581401988!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;