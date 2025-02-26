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
          <h2>Hi, I'm Victoria.</h2>
          <div className="underline"></div>
        </div>
        <div className="image-mobile">
          <img
            src="https://res.cloudinary.com/du7daaai2/image/upload/v1740507722/victoria_ikiloe.jpg"
            alt="Counsellor"
          />
        </div>
        <p>
          Thank you for taking the time to look at my website. <br /><br />
          My name is Victoria Malin. I am a qualified{' '}
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
          registered counsellor. <br />
          I have been working as a counsellor since 2022 and set up my private practice in Southport last year.
          I provide counselling in the Southport and Formby area to Adults on a one-to-one basis.
          I offer 60 minute sessions for £45 both in-person, and remotely by video or telephone. <br /><br />
          Choosing a counsellor can feel overwhelming so I also offer a free no obligation
          20-30 minute session to help you decide if I am the right counsellor for you and to ease any worries you may have about making your choice.
        </p>
        <p>
          You can find me on the{' '}
          <span
            className="hyperlink"
            onClick={() =>
              window.open(
                'https://www.bacp.co.uk/profile/8b2fbfe2-630e-eb11-a813-000d3ab852db',
                '_blank'
              )
            }
          >
            BACP website
          </span>.{' '}
          If you would like, you can also{' '}
          <span className="hyperlink" onClick={() => navigate('/about')}>
            click here
          </span>{' '}
          to learn more about me.
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
