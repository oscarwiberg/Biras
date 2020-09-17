import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="component-container">
      <div className="left-container">
        <h1>LUCY</h1>
        <div className="text-item">
          <i className="fas fa-check-circle"></i>
          <div className="description">
            <h4>0% CO2 FOOTPRINT</h4>
            <p>
              Unlike our competitors, all our products are fossil free and
              carbon neutral.
            </p>
          </div>
        </div>
        <div className="text-item">
          <i className="fas fa-check-circle"></i>
          <div className="description">
            <h4>100% VEGAN</h4>
            <p>
              No animalistic products are used. Our candles are made solely out
              of sustainable Swedish wood.
            </p>
          </div>
        </div>
        <div className="text-item">
          <i className="fas fa-check-circle"></i>
          <div className="description">
            <h4>100% EUROPEAN</h4>
            <p>
              We at Biras and all our partners have their operations within the
              EU.
            </p>
          </div>
        </div>
      </div>
      <div className="right-container">
        <img src="candles.jpg" alt="Candles" />
      </div>
    </div>
  );
};

export default Products;
