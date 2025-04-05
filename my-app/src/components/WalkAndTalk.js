import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/WalkAndTalk.css';

const WalkAndTalk = () => {
  return (
    <Container className="walk-and-talk my-5">
      {/* Header */}
      <header className="services-header text-center mb-4">
        <h1>SERVICES</h1>
        <h2>WALK AND TALK</h2>
      </header>
      
      <h3 className="text-center">Walk and Talk Therapy (Ecotherapy)</h3>
      <p className="text-center">
        Walk and Talk therapy or ecotherapy is something I am hoping to offer later in 2025.
      </p> <br />
      
      {/* Photo Section
      <section className="service-photo mb-4">
        <div className="photo-container">
          <img
            src="https://res.cloudinary.com/du7daaai2/image/upload/v1734446068/default_post_w4tzg1.jpg"
            alt="Formby Pine Woods"
            className="img-fluid"
          />
        </div>
      </section> */}

      {/* Walk and Talk Description Section */}
      <section className="service-description mb-4">
        <h4>What is Walk and Talk Therapy?</h4>
        <p>
          Walk and Talk Therapy offers a unique and refreshing approach to traditional counselling, combining the benefits of nature with the therapeutic process. During these sessions, we meet outdoors and walk together in a peaceful, natural setting, such as a local park or along scenic paths. These walks will be fully risk assessed for their suitability and safety. The gentle movement and fresh air can help to reduce anxiety, improve mood, and encourage open conversation, making it easier to express your thoughts and feelings.
        </p>
        <p>
          Being outside in nature can also create a sense of calm, allowing you to feel more relaxed and grounded as we explore what’s on your mind. For many, the combination of movement and the natural environment makes it easier to reflect on personal challenges and gain new perspectives.
        </p>
        <p>
          Walk and Talk Therapy is ideal for those who prefer a more active, dynamic form of therapy, or for those who may feel anxious about sitting in a traditional office setting. It also offers the added benefit of physical activity, which has been shown to improve mental well-being.
        </p>
        <p>
          If you're looking for a different way to engage in therapy, I’d be happy to discuss how Walk and Talk Therapy could work for you during an initial consultation either in my office or online.
        </p>
      </section>

      {/* Coming Soon Section */}
      <section className="coming-soon text-center mb-4">
        <h3>Coming Soon</h3>
        <p>This service is not currently available. Please check back soon for updates.</p>
      </section>
    </Container>
  );
};

export default WalkAndTalk;
