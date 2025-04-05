import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <Container className="my-5 about-container">
      {/* Profile Card Header */}
      <Card className="profile-card about-header mb-4">
        <Card.Body className="text-center">
          <Image 
            src="https://res.cloudinary.com/du7daaai2/image/upload/v1740507722/victoria_ikiloe.jpg"
            alt="Victoria Malin"
            fluid 
            roundedCircle
            className="profile-image mb-3"
          />
          <div className='text'>
            <h2>Victoria Malin</h2>
            <h4>Counsellor & Psychotherapist</h4>
            <hr />
            <p>
              I am a qualified and insured psychotherapist based in Southport, Merseyside. I completed my training at the University of Central Lancashire in 2023, and I am a registered member of the British Association of Counselling and Psychotherapy (BACP). The BACP is the UK's leading professional body for the counselling professions, promoting safe, ethical, and competent practice, and working to improve psychological wellbeing and mental health. You can find me on their list of registered members. As a member of the BACP, I abide by its ethical framework, which includes regular supervision of my work, as well as ensuring I undertake Continuous Professional Development (CPD)/training.
            </p>
          </div>
        </Card.Body>
      </Card>

      {/* Professional Verification Section */}
      <Row className="mb-4">
        <Col>
          <Card className="mb-3 about-card">
            <Card.Body>
              <Card.Title className="about-card-title">Professional Verification</Card.Title>
              <Card.Text className="about-card-text">
                For peace of mind, you can find my profile on the following websites, which verify qualifications, professional registration, and experience:
              </Card.Text>
              <ul className="about-links">
                <li>
                  <a href="https://www.counselling-directory.org.uk/" target="_blank" rel="noopener noreferrer">
                    Counselling Directory
                  </a>
                </li>
                <li>
                  <a href="https://www.psychologytoday.com/" target="_blank" rel="noopener noreferrer">
                    Psychology Today
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>

          {/* Experience Section */}
          <Card className="mb-3 about-card">
            <Card.Body>
              <Card.Title className="about-card-title">Experience</Card.Title>
              <Card.Text className="about-card-text">
                Since 2023, I have been running my own private practice, and I have also volunteered as a Counsellor at a local Women’s Centre since 2022. Before transitioning to counselling, I spent 10 years working as a Community Mental Health Nurse.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Personal Background Section */}
          <Card className="mb-3 about-card">
            <Card.Body>
              <Card.Title className="about-card-title">Personal Background & Values</Card.Title>
              <Card.Text className="about-card-text">
                I am a member of a ‘Neurospicy’ family, which enables me to have a deeper understanding and appreciation of difference, diversity, and acceptance. I have lived experience of Autism, ADHD, AuDHD, dyslexia, and other neurodivergences. I welcome, acknowledge, and respect clients of all backgrounds, regardless of ethnicity, culture, religion, neurotype, sexual orientation, and gender identity. I work to understand the impact of these on mental health and wellbeing. I endeavor to practise in a way that is anti-oppressive and accessible, and I take a Health At Every Size approach.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Therapy Offerings Section */}
          <Card className="mb-3 about-card">
            <Card.Body>
              <Card.Title className="about-card-title">Therapy Offerings</Card.Title>
              <Card.Text className="about-card-text">
                I offer short and long term counselling and psychotherapy in central Southport and online to provide a confidential, supportive space for you to explore your thoughts, feelings, and experiences. Whether you are struggling to cope, feeling dissatisfied with your life, experiencing relationship issues, processing a loss or change, or facing any challenge, counselling can be the right step. No problem is too small if it's troubling you.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Approach Section */}
          <Card className="mb-3 about-card">
            <Card.Body>
              <Card.Title className="about-card-title">My Approach</Card.Title>
              <Card.Text className="about-card-text">
                My approach sees each person as an individual with unique therapeutic needs. I work flexibly to suit you, with a focus on creating a strong therapeutic relationship, working together to meet your goals, and supporting you to find your own answers rather than simply providing advice.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
