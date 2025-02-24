import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      bg="light"
      expand="lg"
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
          Victoria Malin
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
              About Me
            </Nav.Link>

            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/services/in-person"
                onClick={handleNavClick}
              >
                In-Person
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/online"
                onClick={handleNavClick}
              >
                Online
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/services/walkandtalk"
                onClick={handleNavClick}
              >
                Walk and Talk
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/resources" onClick={handleNavClick}>
              Resources
            </Nav.Link>
            <Nav.Link as={Link} to="/faq" onClick={handleNavClick}>
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
