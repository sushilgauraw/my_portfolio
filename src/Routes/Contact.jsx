import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ContactSection from '../Components/ContactSection';
import Form from '../Components/Form';

function Contact() {
  return (
    <>
      <Navbar/>
      <ContactSection Heading = "Contact" text = "Let's have a chat"/>
      <Form/>
      <Footer/>
    </>
  )
}

export default Contact