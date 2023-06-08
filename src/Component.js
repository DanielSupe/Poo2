import React, { useState } from 'react'
import './index.css'
import { Ascensor } from './Ascensor'
import { Tablero } from './Tablero'
import img from './imagenes/image-removebg-preview.png'
export const Component = () => {
     
  const [piso, Setpiso] = useState(1);
  return (
    <div className='principal'>
      <div className='maceta' >
        <img id='maceta1' alt='Maceta decorativa' src={img}/> 
      </div>
    
      <Ascensor piso={piso}/>
      <Tablero piso={piso} estado = {Setpiso}/>
    </div>
  )
}
