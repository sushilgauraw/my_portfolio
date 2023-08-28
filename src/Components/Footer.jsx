import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "../Components/FooterStyle.css"
import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer">
    <div className="footer-container">
    <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
            <div>
              <p>Thakurbari,Road </p>
              <p>Nabinagar,(Bihar) </p>
            </div>
        </div>
        <div className="Phone">
        <h4>
        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}
         />
         7004906780
        </h4>
        </div>
        <div className="email">
        <h4>
        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
        sushilgauraw1996@gmail.com
        </h4>
        </div>
    </div>
    <div className="right"></div>
    <h4>About For Me</h4>
    <p>Hii, I am Sushil Gauraw . Frontend Developer. I enjoy discussing new project and design challenges.</p>
    <div className="social">
    <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />

    <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} />

    <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />

    <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}} />
    </div>
    </div>
    </div>

    </>
  )
}

export default Footer