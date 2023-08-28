import "./HeroImgStyle.css";
import React from "react";
import AboutImg from "../Asset/home3.jpg";
import myImage  from "../Asset/myImage.png";

import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="Hero">
        <div className="mask">
          <div className="hero-img">
            <img src={AboutImg} className="bgColor" alt="" srcset="" />
            <div className="Image_container">
              <img className="Image" src={myImage} alt="Loading"/>
            </div>
            <div className="Content">
              <h1 className="word">
                <div class="waviy">
                  <span>Hi,</span>
                  <span>I</span>
                  <span>AM</span>
                  <span>S</span>
                  <span>U</span>
                  <span>S</span>
                  <span>H</span>
                  <span>I</span>
                  <span>G</span>
                  <span>A</span>
                  <span>U</span>
                  <span>R</span>
                  <span>A</span>
                  <span>W</span>
                  <span>.</span>
                </div>
              </h1>
              <h2 className="lineUp">FRONTEND DEVELOPER</h2>
              <div className="button">
                <Link to="/project" className="btn">
                  Project
                </Link>
                <Link to="/Contact" className="btn btn-light">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
