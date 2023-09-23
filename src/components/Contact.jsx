import React from 'react'
import contact from '/src/assets/contact.jpg'
import {FaPhone, FaVideo} from 'react-icons/fa'
import {AiFillMessage, AiOutlineWhatsApp} from 'react-icons/ai'
const Contact = () => {
  return (
    <section className="contact">
        <div className="value-desc">
            <h2 className="gold-text">Contact</h2>
            <h1 className="dark-blue">Easy to contact us</h1>
            <p className="text">
               You can find our contact details below, call hours are
               :Mon-Fri(8:00-17:00) & Sat(10:00-16-00)
               We are closed on Sundays and public holidays.
            </p>
            <div className="boxes">
                <div className="box">
                    <div className="contact-info">
                        <FaPhone className="contact-icon"/>
                        <div>
                        <h2 className="contact-title">Call</h2>
                        <p className="number">021 123 145 14</p>
                        </div>
                    </div>
                    <button className="contact-btn">Call</button>
                </div>
                <div className="box">  
                    <div className="contact-info">
                        <AiOutlineWhatsApp className="contact-icon"/>
                        <div>
                        <h2 className="contact-title">WhatsApp</h2>
                        <p className="number">021 123 145 14</p>
                        </div>
                    </div>
                    <button className="contact-btn">Call</button>
                </div>
                <div className="box">
                    <div className="contact-info">
                        <FaVideo className="contact-icon"/>
                        <div>
                        <h2 className="contact-title">Video Call</h2>
                        <p className="number">021 123 145 14</p>
                        </div>
                    </div>
                    <button className="contact-btn">Video Call now</button>
                </div>
                <div className="box">
                    <div className="contact-info">
                        <AiFillMessage className="contact-icon"/>
                        <div>
                        <h2 className="contact-title">Message</h2>
                        <p className="number">021 123 145 14</p></div>
                    </div>
                    <button className="contact-btn">Message now</button>
                </div>
            </div>
        </div>
        <img src={contact} alt="" className='value-img' />
    </section>
  )
}

export default Contact