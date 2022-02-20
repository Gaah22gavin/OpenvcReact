import React from 'react';
import {AiOutlineDown} from "react-icons/ai";

function fonder() {
  return (
    <section className="founder" id="For-Founders">
    <img src="./img/foundtion-img.png" alt=""/>
    <div className="founder-text">
        <h2>join As A founder</h2>
        <p>Connect with a vast amount of investors and share your business pitches</p>
        <a href="#">
            Sign Up
            <i>
              <AiOutlineDown size={20} color={'black'}/> 
            </i>
        </a>
    </div>
</section> 
  )
}

export default fonder;