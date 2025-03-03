import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            {/* Row 1: Menu */}
            <div className="footer-menu">
                <a href="/">Home</a>
                <a href="/about">About Me</a>
                <a href="/services">Services</a>
                <a href="/resources">Resources</a>
                <a href="/faq">FAQ</a>
                <a href="/contact">Contact</a>
            </div>

            {/* Row 2: Location/Contact */}
            <div className="footer-contact">
                <p>Unit 2, 19 Anchor Street, Southport, PR9 0UT, England</p>
                <p>Phone: (+44) 07378 382938 <br/> Email: victoriamalin.counselling@gmail.com</p>
            </div>

            {/* Row 3: Associations */}
            <div className="footer-associations">
                <a
                    href="https://www.bacp.co.uk/profile/8b2fbfe2-630e-eb11-a813-000d3ab852db"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://res.cloudinary.com/du7daaai2/image/upload/v1740581092/tzyhe0i9sq09qvktuw1z.png"
                        alt="Accreditation 1"
                    />
                </a>
                {/* <img
                    src="https://via.placeholder.com/150x50?text=Accreditation+2"
                    alt="Accreditation 2"
                /> */}
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Victoria Malin. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
