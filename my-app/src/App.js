import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Me</h1>;
const Services = () => <h1>Services</h1>;
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
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
