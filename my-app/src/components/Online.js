import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Online.css';

const Online = () => {
    return (
        <Container className="online-services my-5">
            {/* Header */}
            <header className="services-header text-center mb-4">
                <h1>SERVICES</h1>
                <h2>ONLINE & TELEPHONE</h2>
            </header>

            {/* Online Platform Section */}
            <section className="service-platform mb-4">
                <h3 className="text-center">Online & Telephone Counselling</h3>
                <p className="platform-description text-center">
                    Experience therapy from the comfort of your own home or by phone, with secure, confidential sessions.
                </p>
                <div className="platform-image">
                    <img
                        src="https://res.cloudinary.com/du7daaai2/image/upload/v1734446068/default_post_w4tzg1.jpg"
                        alt="Online Therapy Platform"
                        className="img-fluid"
                    />
                </div>
            </section>

            {/* Online Therapy Description */}
            <section className="service-description mb-4">
                <h3>Effective Online & Telephone Counselling</h3>
                <p>
                    If attending face-to-face sessions isn't convenient for you, I also offer online and telephone counselling, providing flexibility and convenience without compromising the quality of care.
                </p>
                <p>
                    Online sessions are conducted via the secure video platform Zoom, ensuring that your privacy is protected while still offering the face-to-face connection that many find helpful. This allows us to work together as if we were in the same room, without the need to travel. If you would like to proceed with online or telephone counselling, please make sure you have a quiet, private and comfortable space where you feel safe to talk openly about whatever you need to.
                </p>
                <p>
                    Both options provide the same level of professional care, support, and empathy, ensuring that no matter where you are, you have access to the help you need. Whether you're in Southport, further afield, or unable to attend in person, I’m here to support you.
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
        </Container>
    );
};

export default Online;
