import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutMeMinimised.css';
// import { Button } from 'react-bootstrap';

const AboutMeMinimised = () => {
  const navigate = useNavigate();

  return (
    <div className="about-me-container">
      <div className="text-section">
        <div className="headers">
          <h2>Welcome</h2>
          <div className="underline"></div>
        </div>
        <div className="image-mobile">
          <img
            src="https://res.cloudinary.com/du7daaai2/image/upload/v1740507722/victoria_ikiloe.jpg"
            alt="Counsellor"
          />
        </div>
        <p>
          Hi, I'm Victoria. Thank you for visiting my website. <br /><br />
          I’m a qualified and{' '}
          <span
            className="hyperlink"
            onClick={() =>
              window.open(
                'https://www.bacp.co.uk/profile/8b2fbfe2-630e-eb11-a813-000d3ab852db',
                '_blank'
              )
            }
          >
            BACP
          </span>{' '}
          registered counsellor and psychotherapist, offering one-to-one therapy to adults in the Southport and Formby areas.
          <br />
          I have been working as a psychotherapist since 2022 and opened my private practice in 2023.
          I offer 60-minute sessions at £50, available both in-person and remotely via video or telephone to suit your needs and preferences.
        </p>
        <p>
          Choosing a counsellor can feel overwhelming, and I understand how important it is to find someone who feels right for you. To help with this decision, I offer a free, no-obligation 30-minute session. This allows us to meet, discuss your goals, and see if I’m the right fit for you, without any pressure.
        </p>
        <p>
          If you would like to learn more{' '}
          <span className="hyperlink" onClick={() => navigate('/about')}>
            about me
          </span>
          , please feel free to reach out with any questions or explore my website further to learn more about my approach to therapy, services, and answers to frequently asked questions.
          </p>
        <p>
          If you have any questions please feel free to get in{' '}
          <span className="hyperlink" onClick={() => navigate('/contact')}>
            contact
          </span>{' '}
          with me, or have a look at some of my{' '}
          <span className="hyperlink" onClick={() => navigate('/faq')}>
            FAQ's
          </span>.
        </p>
      </div>
      <div className="image-section">
        <img
          src="https://res.cloudinary.com/du7daaai2/image/upload/v1740507722/victoria_ikiloe.jpg"
          alt="Counsellor"
        />
      </div>
    </div>
  );
};

export default AboutMeMinimised;
