import React from 'react';
import './Receta.css'

export default function Receta({receta}){
    return(
        <div className='col'>
          <div className='card' id="car">
            <div
              id="imagen"
              style={{
                backgroundImage: "url(/img/HEADER-come.jpg)",
                height: "170px",
                width: "200px",
              }}
            ></div>
            <h5 id="tit">{receta.nombre}</h5>
            <h5 id="segu">{receta.descripcion}</h5>
            <h6 id="segu">{receta.dificultad}</h6>
            <h6 id="segu">{receta.categoria}</h6>
            <h6 id="segu">{receta.porciones}</h6>
          </div>
        </div>
    )
}