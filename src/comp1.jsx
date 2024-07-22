import React from 'react'
import './comp1.css'

function Comp1(props) {
  const{ title, description, button1, button2, button3, button4} = props
  return (
    <div className='comp1'>
      <h1 className='h1'>{title}</h1>
      <p className='para'>{description}</p>
      <button style={{backgroundColor: "#04AA6D", border:"1px solid #04AA6D", color:"white", }}>{button1}</button>
      <button style={{backgroundColor: "#FFF4A3", border:"1px solid #FFF4A3", color:"black", }}>{button2}</button>
      <button style={{backgroundColor: "#282A35", border:"1px solid #282A35", color:"white", }}>{button3}</button>
      <button style={{backgroundColor: "#FFC0C7", border:"1px solid #FFC0C7", color:"white", }}>{button4}</button>
    </div>
  )
}

export default Comp1

