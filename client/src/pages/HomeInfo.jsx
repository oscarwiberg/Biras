import React from 'react';
import './HomeInfo.css';

const HomeInfo = () => {
  return (
    <>
      <div className="home-info-container">
        <h2>DID YOU KNOW?</h2>
        <p>
          Today's candles on the market are in most cases made on either
          animalistic products (e.g. Stearin candles) or fossil fuels (e.g.
          Paraffin candles). ​ Vegan candles are today available to a limited
          extent and are made from agricultural products, e.g. palm oil, soy
          bean oil, rapeseed oil or coconut oil. All these share a high
          environmental burden due to deforestation, intensive agriculture and
          often strict monocultures which deplete the biological diversity. ​
          For a sustainable future, Biras' produces candles which are made 100%
          from Swedish forests, environmental-friendly and completely vegan.
        </p>
      </div>
      <div className="process-container">
        <h2>BIRAS PRODUCTION PROCESS</h2>
        <h3>What makes us special?</h3>
        <div className="wrapper">
          <div className="row">
            <div className="pic-box">
              <img src="forest2.jpg" alt="Nature" />
            </div>
            <div className="text-box">
              <h4>SWEDISH FORESTS</h4>
              <p>
                We only use Swedish wood as raw material to the candles we
                produce for you. We share the passion for sustainability with
                our suppliers and together we ensure no deforestation is caused.
                <br></br>
                <br></br>
                <span>
                  All our suppliers are Forest Stewardship Council® (FSC)
                  certified.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="row">
            <div className="text-box">
              <h4>ENVIRONMENTAL-FRIENDLY AND VEGAN</h4>
              <p>
                Sustainability, reliability, consistency - these are the three
                pillars helping us stand high above all our competitors. Unlike
                other products on the market, stearin and paraffin candles,
                Biras candles do not contain animal fat nor are they produced
                from fossil fuels.
                <br></br>
                <br></br>Our production process ensures that you can buy
                fossil-free and carbon neutral candles with a clean conscience,
                and that we can live sustainably without compromising the
                ability of future generations to meet their needs.
              </p>
            </div>
            <div className="mobile-hide">
              <img src="vegan.jpg" alt="Nature" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeInfo;
