import React,{useState} from 'react'
import './index.css'
export const Ascensor = ({piso}) => {
    let sonido = new Audio("https://lamusicaclasica.com/wp-content/uploads/2017/03/Las-Cuatro-Estaciones-Primavera.mp3")

  return (
    <div>
        <div className='Ascensor'>
            <div className='contMusica'>
                <button onClick={function(){
                    sonido.play();
                }} className='music'><img id='icono' src='https://cdn-icons-png.flaticon.com/128/608/608417.png'/></button>

                <button onClick={() => sonido.pause()} className='music'>
                            ||
                </button>
            </div>

        <div id='piso'>
        

            <p id='resp' > {piso}</p>
            
        </div>
        
    <div className='contenedorRectangulos'>
        <div id='rectangulo1'>

        </div>

        <div id='rectangulo2'>
    
        </div>
    </div>
    </div>

    </div>
  )
}
