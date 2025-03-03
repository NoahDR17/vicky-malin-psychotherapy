import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/home/HomePage';
import './App.css'
import Footer from './components/Footer';

const Home = () => <HomePage />;
const About = () => <h1>About Me</h1>;
const Services = () => <h1>All Services</h1>;
const InPerson = () => <h1>In-Person Services</h1>;
const Online = () => <h1>Online Services</h1>;
const WalkAndTalk = () => <h1>Walk and Talk Services</h1>;
const Resources = () => <h1>Resources</h1>;
const FAQ = () => <h1>FAQ</h1>;
const Contact = () => <h1>Contact</h1>;

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
