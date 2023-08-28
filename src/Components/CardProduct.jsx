import React from 'react'
import {NavLink} from "react-router-dom"

function CardProduct(props) {
  return (
    <>
    <div className="Counter">
    <div className="Card">
    <img className="Product_image" src= {props.Url} alt="Loading"/>
    <div className="Heading-part">
    <h2>{props.Title}</h2>
    <p>{props.SubTitle}</p>
    </div>
    <NavLink to = {props.Deployed_Link}>
    <button className = "btns"> Deployed_Link</button>
    </NavLink>
    </div>
    </div>
    

    </>
  )
}

export default CardProduct