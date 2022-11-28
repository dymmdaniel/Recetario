import React from 'react';
import './Receta.css'

export default function Receta(){
    return(
        <div className='Container'>
            <div className='card' id="car">
            <div
              id="imagen"
              style={{
                backgroundImage: "url(/img/HEADER-come.jpg)",
                height: "170px",
                width: "200px",
              }}
            ></div>
            <h5 id="tit">Nombre del item</h5>
            <h5 id="segu">Descripcion</h5>
            <h6 id="segu">Pequeña Descripcion</h6>
            <h6 id="segu">Categoria</h6>
            <h6 id="segu">6/10</h6>
          </div>
        </div>
    )
}