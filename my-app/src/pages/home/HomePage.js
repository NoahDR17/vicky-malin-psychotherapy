import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
import AboutMeMinimised from '../../components/AboutMeMinimised';

const HomePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <>
            <div className="homepage">
                <div className="container">
                    <h1>
                        Victoria Malin<br />
                        Counselling & Psychotherapy
                    </h1>
                    <Button
                        variant="primary"
                        size="lg"
                        className="consultation-btn"
                        onClick={handleClick}
                    >Book a free consultation today
                    </Button>
                </div>
            </div>
            <div className='container'>
                <AboutMeMinimised />
            </div>
        </>
    );
};

export default HomePage;
