import React from 'react'
import "./HeroStyle.css"
import Intro  from "../Asset/bg1.jpg"

function Hero2() {
  return (
    <div className='hero-img'>
    <img src={Intro} className='Hero' alt="" srcset="" />
    <div className='heading'>
      <h1>PROJECT.</h1>
      <p>some of my most resent work</p>
    </div>
    </div>
  )
}

export default Hero2