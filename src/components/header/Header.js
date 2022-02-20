import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import "../header/Header.css";
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu, GiToggles} from "react-icons/gi";


const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const ToggleMenu = () =>{
    setShowMenu(!showMenu);
  }


  return (

    <header className="header">

      <div className='log'>
        <img src="./img/header-log.png" alt="" />
      </div>

      <menu>
        <ul className='nav-links' id={showMenu ? "nav-links-mobiles" : "nav-links-mobiles-hide"}>
          <li><a href='#'>Explore</a></li>
          <li><a href='#'>For Founders</a></li>
          <li><a href='#'>For Investors</a></li>
          <li><a href='#'>Sign Up</a></li>
        </ul>
      </menu>

      <div onClick={ToggleMenu} className='bar'>
          {
            showMenu ? <AiOutlineClose size={35} color={'black'}/> : <GiHamburgerMenu size={35} color={'black'}/>           
          }
      </div>

    </header>

  );
};

export default Header;
