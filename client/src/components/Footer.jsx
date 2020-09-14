import React from 'react';
import './Footer.css';
import { Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <div id="footer-container" className="mobile-footer">
      <Nav.Link href="#insta">IG</Nav.Link>
      <Nav.Link href="#fb">FB</Nav.Link>
      <Nav.Link href="#linkedin">IN</Nav.Link>
    </div>
    // <Navbar
    //   id="footer-container"
    //   collapseOnSelect
    //   expand="lg"
    //   bg="light"
    //   variant="light"
    // >
    //   <Navbar.Brand href="#home">Biras Logo</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav id="mobile-footer" className="ml-auto">
    //       <Nav.Link as={Link} to="/">
    //         Home
    //       </Nav.Link>
    //       <Nav.Link as={Link} to="/products">
    //         Products
    //       </Nav.Link>
    //       <Nav.Link as={Link} to="/news">
    //         News
    //       </Nav.Link>
    //       <Nav.Link as={Link} to="/Contact">
    //         Contact
    //       </Nav.Link>
    //       <Nav.Link href="#insta">IG</Nav.Link>
    //       <Nav.Link href="#fb">FB</Nav.Link>
    //       <Nav.Link href="#linkedin">IN</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default Footer;
