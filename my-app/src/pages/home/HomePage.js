import React from 'react';
// import { Button } from 'react-bootstrap';
import '../../styles/HomePage.css';
// import { useNavigate } from 'react-router-dom';
import AboutMeMinimised from '../../components/AboutMeMinimised';

const HomePage = () => {

    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('/contact');
    // };

    return (
        <>
            <div className="homepage">
                <div className="hero-container">
                    <h1>
                        <span className='primary-h1'>Victoria Malin</span> <br />
                        <span className='secondary-h1'>Counselling & Psychotherapy</span>
                    </h1>
                    {/* <Button
                        variant="primary"
                        size="lg"
                        className="consultation-btn"
                        onClick={handleClick}
                    >Book a free consultation today
                    </Button> */}
                </div>
            </div>
            <div className='container'>
                <AboutMeMinimised />
            </div>
        </>
    );
};

export default HomePage;
