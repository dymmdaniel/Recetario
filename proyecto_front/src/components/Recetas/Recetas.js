import React, {useState} from "react";
import Receta from "./Receta/Receta";

export default function Recetas( ) {
    const [dataReceta,setDataReceta]=useState([])
    const listaReceta=dataReceta.map(
        receta=>{
            return(
                <div>
                    <Receta receta={receta}/>
                </div>
            )
        }
    )

  return (
    <div>
        {listaReceta}
      
    </div>
  );
}
