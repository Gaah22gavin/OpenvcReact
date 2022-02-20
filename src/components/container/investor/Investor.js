import React from 'react';
import "../Container.css";
import {AiOutlineDown} from "react-icons/ai";


function Investor() {
  return (
    <section className="investor" id="For-Investors">
    <img src="./img/investor.png" alt=""/>
    <div className="investor-text">
        <h2>Join as an investor</h2>
        <p>Connect with founders and invest in
            the next Elon Musk</p>
        <a href="#">
            Sign Up
            <i>
                <AiOutlineDown size={20} color={'white'}/> 
            </i>
        </a>
    </div>
    </section> 
  );
}

export default Investor;