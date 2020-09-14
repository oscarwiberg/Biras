import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import './Home.css';
import HomeInfo from './HomeInfo';

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

      <HomeInfo />
    </div>
  );
};

export default Home;
