import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/AboutPage';
import InPersonPage from './pages/services/InPersonPage';
import OnlinePage from './pages/services/OnlinePage';
import WalkAndTalkPage from './pages/services/WalkAndTalkPage';
import FAQPage from './pages/FAQ/FAQPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

import './App.css'
import Footer from './components/Footer';

const Home = () => <HomePage />;
const About = () => <AboutPage />;
const Services = () => <h1>All Services</h1>;
const InPerson = () => <InPersonPage />;
const Online = () => <OnlinePage />;
const WalkAndTalk = () => <WalkAndTalkPage />;
const FAQ = () => <FAQPage />;
const Resources = () => <ResourcesPage />;
const Contact = () => <ContactPage />;

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/in-person" element={<InPerson />} />
        <Route path="/services/online" element={<Online />} />
        <Route path="/services/walkandtalk" element={<WalkAndTalk />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
