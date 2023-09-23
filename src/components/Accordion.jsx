import React, {useState} from 'react'
import data from '/accordion-data.json'
import {FaCaretSquareDown} from 'react-icons/fa'

const Accordion = () => {
    const [show,setShow] = useState(false)
    const [index, setIndex] =useState(null)
    function handleClick(id){
        setIndex(id)
        setShow(!show)
    }
  return (
    <div className="accordion">
           {
            data.map(item=>(
                <div className="faq" key={item.id}>
                    <div className="faq-header" onClick={()=>handleClick(item.id)}>
                    <h1 className="faq-title">{item.title}</h1>
                    <FaCaretSquareDown className='faq-icon'/>
                  </div>
                  {index == item.id && <p className= "text">{item.detail}</p>}
                </div>
            ))
        }
       
    </div>
  )
}

export default Accordion
