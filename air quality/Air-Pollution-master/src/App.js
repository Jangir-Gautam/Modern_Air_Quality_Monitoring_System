import React from 'react';
import './App.css'; // Import your CSS file containing styles

const HomePage = () => {
  return (
    <div className="bg"> {/* Apply background to the entire body */}
      <div className="homePage">
        {/* Your existing content here */}
        <div className="frameParent">
          <div className="frameWrapper">
            <div className="planetEarthLogoParent">
              <div className="planetEarthLogo">
                <div className="planetEarthLogoChild" />
                <img
                  className="planetEarthWithPlantLogoDIcon"
                  loading="lazy"
                  alt="khjpipi"
                  src="baby-leaf22.png"
                />
              </div>
            </div>
          </div>
          <div className="provideYourHouseOfficeSpParent">
            <div className="leafImagesParent">
              <div className="leafImages" />
              <div className="leafImages1" />
              <img
                className="leafPlantLeavesFlowerPngFIcon"
                alt=""
                src="leaf2.png"
              />
              <img
                className="istockphoto1180581523612x612Icon"
                alt="leaf1"
                src="leaf1.png"
              />
            </div>
          </div>
        </div>
        {/* Signup Form */}
        <form className="sign-up-form">
          <h2 className="title">Sign Up</h2>

          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">

            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Sign Up" className="btn" />

        </form>
      </div>
    </div>
  );
}

export default HomePage;
