import React from 'react'
import './comp2.css'

const Comp2 = (props) => {
  const{title, description, button5}=props    
  return (
    <div className='comp2'>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{button5}</button>
    </div>
  )
}

export default Comp2
