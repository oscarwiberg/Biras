import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Image id="forrest-photo" src="forrest.jpg" fluid />
      <div className="meet-biras">
        <h1>MEET BIRAS</h1>
        <Link to="/contact">
          <button className="cta">Get in Touch</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
