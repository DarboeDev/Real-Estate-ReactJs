import React from 'react'
import {FaMapMarkerAlt, FaPlus} from 'react-icons/fa'
import heroImg from '/src/assets/hero-image.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-info">
            <div className="orange-gradient"></div>
            <h1 className="hero-header">
                Discover <br />
                 Most Suitable <br />
                  Property
            </h1>
            <p className="hero-text">
            Find a variety of properties that suit you very easilty Forget all difficulties in finding a residence for you
            </p>
            <form name='location' className="hero-form">
                    <FaMapMarkerAlt className='pin'/>
                <input type="text" />
               <button className='blue-btn'>Search</button>
            </form>
            <div className="stats">
                <div>
                <h1>9,000 <FaPlus className='plus-icon'/></h1>
                <p>Premium Product</p>
               </div>
               <div>
                <h1>2,000 <FaPlus className='plus-icon'/></h1>
                <p>Premium Product</p>
               </div>
               <div>
                <h1>20 <FaPlus className='plus-icon'/></h1>
                <p>Premium Product</p>
               </div>
            </div>
        </div>
        <img className='hero-img' src={heroImg} alt="" />
    </div>
  )
}

export default Hero