import "./FormStyle.css"
import React from 'react'

function Form() {
  return (
    <>
    <div className="Form-section">

    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"/>
            <label>Email</label>
            <input type="email"/>
            <label>Subject</label>
            <input type="text"/>
            <label>Massage</label>
            <textarea rows= "6" placeholder="Type your massage here."/>
            <button className="btn5">Submit</button>
        </form>
    </div>

    </div>


    </>
  )
}

export default Form
