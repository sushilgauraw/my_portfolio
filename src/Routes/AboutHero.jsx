import React from 'react'
import "./AboutHero.css"
import Image2 from "../Asset/Image2.jpg"
import {NavLink} from "react-router-dom"
import Resume from "../Asset/suhilResume.doc"


function AboutHero() {
  return (
    <>
    <div className='about'>
        <div className='Heading'>
        <h1 className='Heading-part1'>Hi,I AM SUSHIL GAURAW,</h1>
        <div className='Para1'>
            <p className='Para-text1'>I am a front-end developer with a passion of developing different complex web applications.My top three favourite for learning are FreeCodeCamp,LearnCodeOnline,and Scrimba. I am a passionate and experienced Frontend developer bringing core expertise in JavaScript, React.js ,Bootstrap, HTML , CSS , Node.js, Express</p>
            <NavLink to= {Resume}
            Resume = "suhilResume.doc">
            <div className='button'>
                <button className='button-section'>Resume Download</button>
            </div>
            </NavLink>
        </div>
        </div>
        <div className='Image1'>
        <img src={Image2} className='Image-section1' alt='Loading'/>
        </div>
    </div>
    </>
  )
}

export default AboutHero