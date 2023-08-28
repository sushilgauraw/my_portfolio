import React, { useState } from 'react'
import "../Components/NavbarStyle.css"
import { NavLink} from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa"

function Navbar() {
    const[click,setclick] = useState(false)
    const handleClick = ()=>{
        setclick(!click);
    } 
    const[color,setcolor] = useState(false);
    const changeColor = ()=>{
        if(window.scrollY >= 100){
            setcolor(true)

        }else{
            setcolor(false)
        }
    }
    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg":"header" }>
    <NavLink to = "/">
    <h1>PORTFOLIO</h1>
    </NavLink>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <NavLink to= "/">Home</NavLink>
        </li>
        <li>
            <NavLink to= "/Project">Project</NavLink>
        </li>
        <li>
            <NavLink to= "/About">About</NavLink>
        </li>
        <li>
            <NavLink to= "/Contact">Contact</NavLink>
        </li>
      
    </ul>
    <div className='humburger' onClick = {handleClick} >
    {click ? (<FaTimes size={20} style = {{ color:"#fff"}}/>): (<FaBars size={20} style = {{ color:"#fff"}}/>) }
    </div>
    </div>
  )
}

export default Navbar