import React from 'react'
import AboutImg  from "../Asset/bg2.jpg"

function ContactSection(props) {
  return (
    <>
    <div>
    <div className='hero-img'>
    <img src={AboutImg} className='bgColor' alt="" />
    <div className='heading'>
      <h1>{props.Heading}</h1>
      <p>{props.text}</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default ContactSection