import React from 'react';
import './Hero.css';
// import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
// import hero_image from '../Assets/hero_image.png';
// import product_4 from '../Assets/hero_image.png';



const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        {/* <h2>NEW ARRIVALS ONLY</h2> */}
        <div>
          {/* <div className="hero-hand-icon">
           
            <img src={hand_icon} alt="" />
          </div> */}
          {/* <p>Last Chance !</p>
          <p>Special offer !</p>
          <p>Everything !</p> */}
        </div>
        {/* <div className="hero-latest-btn"> */}
          {/* <div>Latest Collection</div> */}
          {/* <img src={arrow} alt="" /> */}
        {/* </div> */}
      </div>

      <div className="hero-right">
      {/* <img src={product_4} alt="" /> */}
        {/* <img src={hero_image} alt="" /> */}
      </div>
    </div>
  );
}

export default Hero;
