import React from 'react'
import "./AboutStyle.css"
import AboutImg  from "../Asset/home.jpg"


function AboutSection(props) {
  return (
    <>
    <div>
    <div className='hero-img'>
    <img src={AboutImg} className='bgColor' alt="" srcset="" />
    <div className='heading'>
      <h1>ABOUT.</h1>
      <p>{props.text}</p>
    </div>
    </div>
    </div>
 

    </>
  )
}

export default AboutSection;