import React from 'react'
import logo from '/src/assets/logo2.png'
const Footer = () => {
  return (
    <footer>
        <div className="get-started">
            <h1>Get started with Homyz</h1>
            <p>Subscribe and be the first to find out the best the best prices and deals.
                Come find your dream home with Homyz
            </p>
            <button>Get Started</button>
        </div>
        <div className="footer">
            <div className="footer-logo">
               <img src={logo} alt="logo" />
               <p>Our aim is to provide the best of homes for you!</p>
            </div>
            <div className="footer-info">
                <h1 className='house-name'>Information</h1>
                <p>Brusubi phase 1, WCR, The Gambia</p>
                <div className="footer-links">
                    <a href="">Property</a>
                    <a href="">Services</a>
                    <a href="">Product</a>
                    <a href="">About Us</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer