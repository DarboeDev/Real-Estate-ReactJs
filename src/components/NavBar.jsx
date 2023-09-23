import React, {useState} from 'react'
import logo from '/src/assets/logo.png'
import close from '/src/assets/icon-close.svg'
import {FiMenu} from 'react-icons/fi'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  function menuToggle(){
    setToggleMenu(true)
    console.log("clicked");
  }
  function closeMenu(){
    setToggleMenu(false)
    console.log("clicked");
  }

  return (
    <nav>
        <img src={logo} alt="logo-image" />
        <div className={toggleMenu ? "menu-links" : "nav-links"}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="blue-btn">Contact</button>
        </div>
        <div className="menu-div">
        {toggleMenu ?<img src={close} className='close' onClick={()=> closeMenu()} alt="" /> :
          <FiMenu className='menu-icon' onClick={()=> menuToggle()}/>}
        </div>
    </nav>
  )}


export default NavBar