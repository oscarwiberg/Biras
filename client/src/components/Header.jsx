import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar
      id="nav-container"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand href="#home">Biras Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav id="mobile-menu" className="ml-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#news">News</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#insta">IG</Nav.Link>
          <Nav.Link href="#fb">FB</Nav.Link>
          <Nav.Link href="#linkedin">IN</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
