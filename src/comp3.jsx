import React from 'react'
import './comp3.css'

const Comp3 = (props) => {
    const{name}=props
  return (
    <div className='comp3'>
      <h2>{name}</h2>
    </div>
  )
}

export default Comp3
