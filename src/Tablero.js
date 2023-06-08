import React, { useEffect} from 'react'
import './index.css'
import boton from './imagenes/boton.mp3'

let listaPisos = []
let sonido = new Audio(boton)


const repetidos = function(Valor){
  sonido.play();
  for(let i = 0;i < listaPisos.length;i++){
    if(listaPisos[i] == Valor){
      return;
    }
  }
  listaPisos.push(Valor)
}
const mover = function(piso,estado){
  if(piso == listaPisos[0]){
    listaPisos.shift();
  }
  if(piso < listaPisos[0]){
    setTimeout(() => estado(piso+1),1000)
  }
  if(piso > listaPisos[0]){
    setTimeout(() => estado(piso-1),1000)
  }
}
//-------------------------------------------
export const Tablero = ({piso,estado}) => {

  useEffect(function(){
    
    setTimeout(function(){
      console.log(`Piso: ${piso}`)
    })
    if(piso == listaPisos[0]){
      document.getElementById('rectangulo1').classList.toggle('mover-der');
      document.getElementById('rectangulo2').classList.toggle('mover-izq');
      setTimeout(function(){
        document.getElementById('rectangulo1').classList.toggle('mover-der');
        document.getElementById('rectangulo2').classList.toggle('mover-izq');
      },1000)
      listaPisos.shift();
      setTimeout(function(){
        if(piso != listaPisos[0]){
          if(piso < listaPisos[0]){
             estado(piso+1)
          }
          if(piso > listaPisos[0]){
             estado(piso-1)
          }
        }
      },2000)
      
    }
    //-----------------------------
    if(piso < listaPisos[0]){
      setTimeout(() => estado(piso+1),1000)
    }
    if(piso > listaPisos[0]){
      setTimeout(() => estado(piso-1),1000)
    }
  },[piso])


  return (
    <div className='tablero'>
        <button onClick={function(){
          repetidos(1)
          mover(piso,estado)
        }}>1</button>

        <button onClick={function(){
          repetidos(2)
          mover(piso,estado)
        }}>2</button>

        <button onClick={function(){
          repetidos(3)
          mover(piso,estado)
        }}>3</button>

        <button onClick={function(){
          repetidos(4)
          mover(piso,estado)
        }} >4</button>

        <button onClick={function(){
          repetidos(5)
          mover(piso,estado)
        }} >5</button>
        
        <button onClick={function(){
          repetidos(6)
          mover(piso,estado)
        }}>6</button>

        <button onClick={function(){
          repetidos(7)
          mover(piso,estado)
        }}>7</button>

        <button onClick={function(){
          repetidos(8)
          mover(piso,estado)
        }} >8</button>

        <button onClick={function(){
          repetidos(9)
          mover(piso,estado)
        }} >9</button>

        <button onClick={function(){
          repetidos(10)
          mover(piso,estado)
        }} >10</button>

        <button onClick={function(){
          repetidos(11)
          mover(piso,estado)
        }} >11</button>

        <button onClick={function(){
         repetidos(12)
          mover(piso,estado)
        }} >12</button>
    </div>
  )
}
