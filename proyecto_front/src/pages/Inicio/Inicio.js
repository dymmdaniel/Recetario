import * as React from 'react';
import Recetas from '../../components/Recetas/Recetas';
import './inicio.css'

export default function Inicio() {
  return (
    <div className="Inicio">
      <div id="imagen" style={{ backgroundImage: "url(/img/HEADER-come.jpg)" ,height:"350px"}}></div>
      <Recetas/>
    </div>
  )
}