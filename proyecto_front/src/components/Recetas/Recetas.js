import React, { useState, useEffect } from "react";
import Receta from "./Receta/Receta";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Recetas() {
  const [dataReceta, setDataReceta] = useState([]);
  useEffect(() => {
    axios
      .get("/api/receta/")
      .then((res) => {
        setDataReceta(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  const listaReceta = dataReceta.map((receta) => {
    return (
      <div>
        <Receta receta={receta} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        {listaReceta}
      </div>
    </div>
  );
}
