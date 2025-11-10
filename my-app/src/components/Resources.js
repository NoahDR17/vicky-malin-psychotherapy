import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Resources.css';

const Resources = () => {
    const resourceCategories = [
        {
            title: "Crisis Support",
            urgent: true,
            resources: [
                { name: "Domestic Violence", url: "https://swaca.com/" },
                { name: "Rape and Sexual Abuse", url: "https://www.rasamerseyside.org/" },
                { name: "Support relating to suicide (Samaritans)", url: "https://www.samaritans.org/" },
                { name: "Listening ear", url: "https://listening-ear.co.uk/" }
            ]
        },
        {
            title: "Local Support Services",
            resources: [
                { name: "Support for men in Sefton", url: "https://seansplace.org.uk/", additionalLink: { text: "Find your nearest group", url: "https://andysmanclub.co.uk/find-your-nearest-group/?aroundLatLng%5Blat%5D=53.5034449&aroundLatLng%5Blng%5D=-2.970359&configure%5BaroundLatLng%5D=true&configure%5BaroundRadius%5D=32000&configure%5BgetRankingInfo%5D=true" } },
                { name: "Support for women", url: "http://www.swanwomenscentre.org/", additionalLink: { text: "Venus Charity", url: "https://www.venuscharity.org/" } },
                { name: "Support with Alcoholism/caring", url: "https://www.alcoholics-anonymous.org.uk/", additionalLink: { text: "Change Grow Live Sefton", url: "https://www.changegrowlive.org/sefton" } }
            ]
        },
        {
            title: "Specialized Support",
            resources: [
                { name: "Support for people with disabilities", url: "https://www.conquestart.org/art-groups/formby/" },
                { name: "Alzheimers", url: "https://www.alzheimers.org.uk/" },
                { name: "Support for Carers", url: "https://www.sefton-carers.org.uk/" },
                { name: "Support with grief (age 13-25)", url: "https://www.winstonswish.org/" }
            ]
        },
        {
            title: "Mental Health & Wellbeing",
            resources: [
                { name: "Mind", url: "https://www.mind.org.uk/" },
                { name: "Self compassion", url: "https://self-compassion.org/" },
                { name: "Shame resources", url: "https://brenebrown.com/" },
                { name: "Self Healing", url: "https://theholisticpsychologist.com/" },
                { name: "Information on Polyvagal Theory", url: "https://www.rhythmofregulation.com/" }
            ]
        },
        {
            title: "Specific Topics",
            resources: [
                { name: "Narcissism", url: "https://doctor-ramani.com/" },
                { name: "Gabor Mate - addiction/stress", url: "https://drgabormate.com/blog/" }
            ]
        },
        {
            title: "Professional Information",
            resources: [
                { name: "Information about counselling", url: "https://www.bacp.co.uk/about-therapy/information-about-counselling/" },
                { name: "Ethical framework", url: "https://www.bacp.co.uk/events-and-resources/ethics-and-standards/ethical-framework-for-the-counselling-professions/" }
            ]
        }
    ];

    return (
        <Container className="resources my-5">
            {/* Header */}
            <header className="resources-header text-center mb-5">
                <h1>RESOURCES</h1>
                <h2>Additional Resources and Support</h2>
            </header>

            {/* Introductory Text */}
            <section className="resources-intro mb-5">
                <p>
                    In addition to the therapy services I offer, I understand that there may be times when you need extra support or resources.
                </p>
                <p>
                    On this page, you'll find a variety of helpful tools, articles, and links to other professional services organized by category. 
                    These are third-party sites I have accessed myself for trusted information and were up-to-date at the time of this website's creation.
                </p>
                <p className="disclaimer">
                    <em>I cannot accept liability for the information supplied but have chosen to share them in good faith to help others. 
                    If you're ever unsure about where to turn next, please feel free to get in touch.</em>
                </p>
            </section>

            {/* Resource Categories */}
            <section className="resource-categories">
                <Row>
                    {resourceCategories.map((category, idx) => (
                        <Col key={idx} lg={6} className="mb-4">
                            <Card className={`resource-card h-100 ${category.urgent ? 'urgent-card' : ''}`}>
                                <Card.Body>
                                    <Card.Title className="category-title">
                                        {category.urgent && <span className="urgent-badge">Urgent</span>}
                                        {category.title}
                                    </Card.Title>
                                    <ul className="resource-list">
                                        {category.resources.map((resource, rIdx) => (
                                            <li key={rIdx} className="resource-item">
                                                <strong>{resource.name}:</strong>
                                                <div className="resource-links">
                                                    <a 
                                                        href={resource.url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="resource-link"
                                                    >
                                                        Visit website →
                                                    </a>
                                                    {resource.additionalLink && (
                                                        <>
                                                            <span className="link-separator">|</span>
                                                            <a 
                                                                href={resource.additionalLink.url} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="resource-link"
                                                            >
                                                                {resource.additionalLink.text} →
                                                            </a>
                                                        </>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </Container>
    );
};

export default Resources;
