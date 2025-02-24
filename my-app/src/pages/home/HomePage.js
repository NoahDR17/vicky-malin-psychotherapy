import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <div className="homepage">
            <h1>
                Victoria Malin<br />
                counselling and Psychotherapy
            </h1>
            <Button
                variant="primary"
                size="lg"
                className="consultation-btn"
                onClick={handleClick}
            >Book a free meeting today
            </Button>
        </div>
    );
};

export default HomePage;
