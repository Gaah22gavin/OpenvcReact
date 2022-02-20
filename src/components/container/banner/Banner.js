import React from 'react'
import {AiOutlineDown} from "react-icons/ai";


function Banner() {
  return (
    <section className="banner">
      <div className="platform">
          <h1>
            the platform connecting founders to angles investors
          </h1>
          
          <a href="#">Sign Up
              <i className="fas fa-angle-down">
                <AiOutlineDown size={20} color={'black'}/> 
              </i>
          </a>
          <a href="#">Sign In</a>
      </div>

      <div className="James">

        <img src="./img/banner-img.png" alt="" />

        <div className="james-box">
            <h2>James Cordin</h2>
            <p>Founder of <span>MechaLimb </span> funded via OVC in 2018</p>
        </div>

      </div>
    </section>
  )
}

export default Banner;