import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  // Close the navbar after a nav link is clicked
  const handleNavClick = () => setExpanded(false);

  // Close navbar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <Navbar
      ref={navRef}
      className='navbar'
      expand="lg"
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={handleNavClick}>
          Victoria Malin
        </Navbar.Brand>
        {/* Replace the default toggle icon with a custom "Menu" link */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleNavClick}>
              About Me
            </Nav.Link>
            <NavDropdown title="Services" id="services-dropdown" className='dropdown'>
              <NavDropdown.Item
                as={NavLink}
                to="/services/in-person"
                onClick={handleNavClick}
              >
                In-Person
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/services/online"
                onClick={handleNavClick}
              >
                Online
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/services/walkandtalk"
                onClick={handleNavClick}
              >
                Walk and Talk
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/resources" onClick={handleNavClick}>
              Resources
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faq" onClick={handleNavClick}>
              FAQ
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              onClick={handleNavClick}
              className="contact-link"
            >
              Get in Touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
