import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <Container className="faq my-5">
      {/* Header */}
      <header className="faq-header text-center mb-4">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      </header>
      
      {/* Fees and Service Options */}
      <section className="faq-fees mb-4">
        <h3>What are your fees?</h3>
        <ul>
          <li>Initial 30 minute consultation - Free</li>
          <li>Individual 60 minute sessions - £50</li>
          <li>Individual 90 minute session - £75</li>
        </ul>
        <p>Face-to-face, telephone and online counselling options are available.</p>
      </section>
      
      {/* Accordion for FAQ items */}
      <Accordion defaultActiveKey="0">
        {/* 1. Availability */}
        <Accordion.Item eventKey="199">
          <Accordion.Header>What is my availability?</Accordion.Header>
          <Accordion.Body>
            <p>
              I offer sessions Monday to Saturday flexibly. My day usually starts from 10.00 and may end at 20.00. The first half of the week (Monday to Wednesday) I work from my Southport office, while other days I am available for home visits, online and telephone appointments. Sessions are 60 minutes long and usually take place weekly or fortnightly. Sessions are usually booked on an ongoing basis with regular reviews of progress to make sure they are meeting your needs.
            </p>
            {/* Optionally, you could insert images into this answer if desired */}
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 2. Counselling vs Psychotherapy */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is the difference between counselling and psychotherapy?</Accordion.Header>
          <Accordion.Body>
            <p>
              No one in the therapy world can agree on this, which can be confusing for people trying to find support. Some people associate counselling with shorter issue-focused work and psychotherapy with longer open-ended personal development work. I use the terms interchangeably and will discuss with you what type of support you are looking for in our initial consultation.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 3. How does counselling work? */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does counselling work?</Accordion.Header>
          <Accordion.Body>
            <p>
              Counselling offers the opportunity to sound off and off-load without judgement. It gives you the chance to explore your thoughts and feelings and to reflect on past troubling events. This process can help you better understand yourself, those around you, and your relationships. We take a step back, 'stand and stare' at your current situation, assess your feelings and decide what (if anything) you wish to change.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 4. Can counselling help me? */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>Can counselling help me?</Accordion.Header>
          <Accordion.Body>
            <p>
              Counselling, psychotherapy or therapy can be enlightening and transformative. Our relationships with ourselves and others have the potential to become richer and more authentic. Though counselling can be a challenging process, I am a curious, supportive, and safe practitioner willing to accompany you on your journey. The counselling relationship itself can be therapeutic, providing a secure, trusting, and healthy space.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 5. Initial consultation */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>What happens in the initial consultation?</Accordion.Header>
          <Accordion.Body>
            <p>
              I believe that a good relationship between therapist and client has a big impact on the effectiveness of therapy. That’s why I offer a free 30 minute initial consultation. This session gives you the opportunity to learn more about how I work and assess if we’re a good fit, as well as for me to understand your needs and determine whether I can support you or recommend a different service.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 6. Charges and concessions */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>How much do you charge and do you offer concessions?</Accordion.Header>
          <Accordion.Body>
            <p>
              The initial 30 minute consultation is free, with sessions thereafter charged at £50 for 60 minutes and £75 for 90 minutes. I also offer a limited number of low-cost places for people on low incomes—please enquire for details. If costs are prohibitive, you might find useful local free or low-cost counselling services at Hub of Hope.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 7. Qualifications and Training */}
        <Accordion.Item eventKey="6">
          <Accordion.Header>What are your qualifications and training?</Accordion.Header>
          <Accordion.Body>
            <p>
              I hold a Postgraduate Diploma in Integrative Counselling and Psychotherapy from the University of Central Lancashire, a Graduate Certificate in Advanced Counselling Skills, and a Diploma of Higher Education in Mental Health Nursing. In addition, I have completed training in:
            </p>
            <ul>
              <li>Pluralistic Counselling for Loss and Grief</li>
              <li>Creative Therapeutic Methods</li>
              <li>Polyvagal Informed Practitioner Training</li>
              <li>Janina Fisher’s Complete Trauma Immersion Training</li>
              <li>Adult ADHD – Therapeutic Themes and Interventions</li>
              <li>Essential Information, Strength-based Skills, and Meaningful Interventions for Women with ADHD</li>
              <li>An Introduction to the Internal Family Systems Model</li>
              <li>Using Compassion Focused Therapy (CFT) for Trauma</li>
              <li>Neurodiversity Specialist Training</li>
              <li>Walk and Talk Therapy/Ecotherapy (coming soon)</li>
            </ul>
            <p>
              I have also completed specialist training in supporting autistic and other neurodivergent clients via Advanced Solutions.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 8. Approach to Counselling */}
        <Accordion.Item eventKey="7">
          <Accordion.Header>What is your approach to counselling?</Accordion.Header>
          <Accordion.Body>
            <p>
              I work as a qualified BACP registered Integrative psychotherapist, employing a relational approach. This means I focus solely on you, help you explore your experiences, and draw on several counselling methods. At the centre of my work is the belief that you are the expert in your life. My role is to listen carefully and help you determine what you want to change or keep, creating a personalized approach that meets your needs.
            </p>
            <p>
              I provide a warm, welcoming space for clients of all backgrounds, helping you explore potentially challenging areas at your own pace.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 9. Type of Therapy */}
        <Accordion.Item eventKey="8">
          <Accordion.Header>What type of therapy do you practice?</Accordion.Header>
          <Accordion.Body>
            <p>
              I work integratively and draw from various therapeutic models including:
            </p>
            <ul>
              <li>Person-centred Approach</li>
              <li>Existential Therapy</li>
              <li>Psychodynamic Therapy</li>
              <li>Mindfulness-based and Compassion-Focused Approaches</li>
              <li>Polyvagal Informed Theory</li>
              <li>Trauma Informed Approaches</li>
            </ul>
            <p>
              It’s completely fine if you're unsure about these approaches—I’ll help clarify them during our initial consultation.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 10. Issues Helped With */}
        <Accordion.Item eventKey="9">
          <Accordion.Header>What kind of issues can you help with?</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Confidence and Self-esteem</li>
              <li>Loss, Grief and Bereavement</li>
              <li>Late diagnosis of ASD/ADHD (neurodiversity)</li>
              <li>Self-criticism and inner gremlins</li>
              <li>Family issues</li>
              <li>Self acceptance</li>
              <li>Relationship difficulties</li>
              <li>Women's issues</li>
              <li>Disconnection</li>
              <li>Anxiety</li>
              <li>Trauma</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 11. What to expect */}
        <Accordion.Item eventKey="10">
          <Accordion.Header>What should I expect from counselling?</Accordion.Header>
          <Accordion.Body>
            <p>
              Counselling is a collaborative process where you speak about whatever is on your mind—no topic is too small. We meet weekly (or fortnightly) for 60‑minute sessions, with ongoing reviews of your progress. I work at a pace you choose, focusing entirely on your needs and experiences.
            </p>
            <p>
              The relationship itself can be therapeutic, offering you a secure, trusting space to grow and learn about yourself.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 12. Working with couples/families/groups */}
        <Accordion.Item eventKey="11">
          <Accordion.Header>Do you work with couples, families or groups?</Accordion.Header>
          <Accordion.Body>
            <p>
              Currently, I work exclusively with individual clients. For couples, families, or group therapy, please refer to specialized directories such as those provided by cosrt.org.uk or bacp.co.uk.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 13. Confidentiality */}
        <Accordion.Item eventKey="12">
          <Accordion.Header>Will our sessions be confidential?</Accordion.Header>
          <Accordion.Body>
            <p>
              Everything discussed during our sessions remains confidential, except when there is a risk to your safety or someone else’s, or where disclosure is required by law. As a BACP registered practitioner, I adhere to a strict ethical framework ensuring your information is kept secure.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 14. Online Sessions */}
        <Accordion.Item eventKey="13">
          <Accordion.Header>Do you offer online sessions?</Accordion.Header>
          <Accordion.Body>
            <p>
              Yes, I offer remote sessions via Zoom in addition to face-to-face counselling in Southport.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 15. Accessibility */}
        <Accordion.Item eventKey="14">
          <Accordion.Header>Are your sessions accessible?</Accordion.Header>
          <Accordion.Body>
            <p>
              While I strive to make my practice as accessible as possible, my Southport office is on the first floor and may not be suitable for wheelchair users. If accessibility is a concern, please contact me so that we can discuss alternative arrangements (such as online or home visits).
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 16. Making an Appointment */}
        <Accordion.Item eventKey="15">
          <Accordion.Header>How do I make an appointment?</Accordion.Header>
          <Accordion.Body>
            <p>
              To book an appointment, please complete the contact form on my website. I will then get in touch with you to discuss available times and arrange a session.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 17. Supervision for Therapists */}
        <Accordion.Item eventKey="16">
          <Accordion.Header>Do you offer supervision for other therapists?</Accordion.Header>
          <Accordion.Body>
            <p>
              Not at this stage, though this is something I hope to offer in the future.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        
        {/* 18. Ending Therapy */}
        <Accordion.Item eventKey="17">
          <Accordion.Header>How do I end therapy?</Accordion.Header>
          <Accordion.Body>
            <p>
              We work together on an ongoing basis until you feel that therapy has fulfilled its purpose. When you decide it’s time to end therapy, I will support you through that process by discussing your progress and any final steps or evaluations to ensure a smooth transition.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQ;
