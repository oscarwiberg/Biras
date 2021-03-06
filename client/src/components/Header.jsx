import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar
      id="nav-container"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
    >
      <Navbar.Brand href="#home">Biras Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav id="mobile-menu" className="ml-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/news">
            News
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact">
            Contact
          </Nav.Link>
          <Nav.Link href="#insta">IG</Nav.Link>
          <Nav.Link href="#fb">FB</Nav.Link>
          <Nav.Link href="#linkedin">IN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
