import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import AboutSection from './AboutSection';
import AboutHero from './AboutHero';


function About() {
  return (
    <>
    <Navbar/>
    <AboutSection text = "I Am Friendly Frontend Developer"/>
    <AboutHero/>
    <Footer/>
    </>
  )
}

export default About;