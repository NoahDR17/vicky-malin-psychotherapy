import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Resources.css';

const Resources = () => {
    return (
        <Container className="resources my-5">
            {/* Header */}
            <header className="resources-header text-center mb-4">
                <h1>RESOURCES</h1>
                <h2>Additional Resources and Support</h2>
            </header>

            {/* Introductory Text */}
            <section className="resources-intro mb-4">
                <p>
                    In addition to the therapy services I offer, I understand that there may be times when you need extra support or resources.
                    On this page, you’ll find a variety of helpful tools, articles, and links to other professional services that may be useful
                    to you. Whether you’re looking for self-help materials, crisis support, or specialist services, I’ve gathered these options,
                    some local and some national—to assist you on your journey. These are third-party sites I have accessed myself for trusted
                    information and were up-to-date at the time of this website's creation. I cannot accept liability for the information supplied
                    but have chosen to share them in good faith to help others. If you’re ever unsure about where to turn next, please feel free
                    to get in touch, and I can help guide you to the right support for your needs. Your well-being is my priority, and I’m here
                    to ensure you have access to the resources that can help you feel empowered and supported.
                </p>
            </section>

            {/* Resource Category */}
            <section className="resource-category mb-4">
                <h3>LOCAL CRISIS / OUT OF HOURS SUPPORT</h3>
                <ul className="resource-list">
                    <li>
                        <strong>Domestic Violence:</strong><br />
                        <a href="https://swaca.com/" target="_blank" rel="noopener noreferrer">https://swaca.com/</a>
                    </li>
                    <li>
                        <strong>Rape and Sexual Abuse:</strong><br />
                        <a href="https://www.rasamerseyside.org/" target="_blank" rel="noopener noreferrer">https://www.rasamerseyside.org/</a>
                    </li>
                    <li>
                        <strong>Support for men in Sefton:</strong><br />
                        <a href="https://seansplace.org.uk/" target="_blank" rel="noopener noreferrer">https://seansplace.org.uk/</a>
                        <br />
                        <a
                            href="https://andysmanclub.co.uk/find-your-nearest-group/?aroundLatLng%5Blat%5D=53.5034449&amp;aroundLatLng%5Blng%5D=-2.970359&amp;configure%5BaroundLatLng%5D=true&amp;configure%5BaroundRadius%5D=32000&amp;configure%5BgetRankingInfo%5D=true"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Find your nearest group
                        </a>
                    </li>
                    <li>
                        <strong>Support for women:</strong><br />
                        <a href="http://www.swanwomenscentre.org/" target="_blank" rel="noopener noreferrer">http://www.swanwomenscentre.org/</a>
                        <br />
                        <a href="https://www.venuscharity.org/" target="_blank" rel="noopener noreferrer">https://www.venuscharity.org/</a>
                    </li>
                    <li>
                        <strong>Support with Alcoholism/caring:</strong><br />
                        <a href="https://www.alcoholics-anonymous.org.uk/" target="_blank" rel="noopener noreferrer">https://www.alcoholics-anonymous.org.uk/</a>
                        <br />
                        <a href="https://www.changegrowlive.org/sefton" target="_blank" rel="noopener noreferrer">https://www.changegrowlive.org/sefton</a>
                    </li>
                    <li>
                        <strong>Support for people with disabilities:</strong><br />
                        <a href="https://www.conquestart.org/art-groups/formby/" target="_blank" rel="noopener noreferrer">https://www.conquestart.org/art-groups/formby/</a>
                    </li>
                    <li>
                        <strong>Alzheimers:</strong><br />
                        <a href="https://www.alzheimers.org.uk/" target="_blank" rel="noopener noreferrer">https://www.alzheimers.org.uk/</a>
                    </li>
                    <li>
                        <strong>Support for Carers:</strong><br />
                        <a href="https://www.sefton-carers.org.uk/" target="_blank" rel="noopener noreferrer">https://www.sefton-carers.org.uk/</a>
                    </li>
                    <li>
                        <strong>Shame:</strong><br />
                        <a href="https://brenebrown.com/" target="_blank" rel="noopener noreferrer">https://brenebrown.com/</a>
                    </li>
                    <li>
                        <strong>Self compassion:</strong><br />
                        <a href="https://self-compassion.org/" target="_blank" rel="noopener noreferrer">https://self-compassion.org/</a>
                    </li>
                    <li>
                        <strong>Information on Polyvagal Theory:</strong><br />
                        <a href="https://www.rhythmofregulation.com/" target="_blank" rel="noopener noreferrer">https://www.rhythmofregulation.com/</a>
                    </li>
                    <li>
                        <strong>Mind:</strong><br />
                        <a href="https://www.mind.org.uk/" target="_blank" rel="noopener noreferrer">https://www.mind.org.uk/</a>
                    </li>
                    <li>
                        <strong>Narcissism:</strong><br />
                        <a href="https://doctor-ramani.com/" target="_blank" rel="noopener noreferrer">https://doctor-ramani.com/</a>
                    </li>
                    <li>
                        <strong>Self Healing:</strong><br />
                        <a href="https://theholisticpsychologist.com/" target="_blank" rel="noopener noreferrer">https://theholisticpsychologist.com/</a>
                    </li>
                    <li>
                        <strong>Support relating to suicide (Samaritans):</strong><br />
                        <a href="https://www.samaritans.org/" target="_blank" rel="noopener noreferrer">https://www.samaritans.org/</a>
                    </li>
                    <li>
                        <strong>Listening ear:</strong><br />
                        <a href="https://listening-ear.co.uk/" target="_blank" rel="noopener noreferrer">https://listening-ear.co.uk/</a>
                    </li>
                    <li>
                        <strong>Information about counselling:</strong><br />
                        <a href="https://www.bacp.co.uk/about-therapy/information-about-counselling/" target="_blank" rel="noopener noreferrer">https://www.bacp.co.uk/about-therapy/information-about-counselling/</a>
                    </li>
                    <li>
                        <strong>Ethical framework:</strong><br />
                        <a href="https://www.bacp.co.uk/events-and-resources/ethics-and-standards/ethical-framework-for-the-counselling-professions/" target="_blank" rel="noopener noreferrer">https://www.bacp.co.uk/events-and-resources/ethics-and-standards/ethical-framework-for-the-counselling-professions/</a>
                    </li>
                    <li>
                        <strong>Gabor Mate - addiction/stress:</strong><br />
                        <a href="https://drgabormate.com/blog/" target="_blank" rel="noopener noreferrer">https://drgabormate.com/blog/</a>
                    </li>
                    <li>
                        <strong>Support with grief (age 13-25):</strong><br />
                        <a href="https://www.winstonswish.org/" target="_blank" rel="noopener noreferrer">
                            https://www.winstonswish.org/
                        </a>
                    </li>
                </ul>
            </section>
        </Container>
    );
};

export default Resources;
