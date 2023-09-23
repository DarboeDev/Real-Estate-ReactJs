import React from 'react'
import value from '/src/assets/value.png'
import Accordion from './Accordion'
const Value = () => {
  return (
    
    <section className="value">
        <img src={value} alt="" className='value-img' />
        <div className="value-desc">
            <h2 className="gold-text">Our Value</h2>
            <h1 className="dark-blue">Value We Give to You</h1>
            <p className="text">
                We are always ready to provide the best services for you.
                We believe a good home provides a better life.
                So let Homyz make your life better.
            </p>
         <Accordion/>
        </div>
    </section>
  )
}

export default Value