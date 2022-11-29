import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Ver_Receta.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Ver_Receta() {
  const params = useParams();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tiempoPreparacion, setTiempoPreparacion] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [instrucciones, setInstrucciones] = useState("");
  const [porciones, setPorciones] = useState("");
  const [tipo,setTipo] = useState("");
  useEffect(() => {
    axios.get(`/api/receta/${params.nombre}`).then((res) => {
      setNombre(res.data.nombre);
      setDescripcion(res.data.descripcion);
      setTiempoPreparacion(res.data.tiempoPreparacion);
      setDificultad(res.data.dificultad);
      setIngredientes(res.data.ingredientes);
      setInstrucciones(res.data.instrucciones);
      setPorciones(res.data.porciones);
      setTipo(res.data.tipo)
    });
  },[]);

  return (
    <div>
      <div id="bicolor"></div>
      <div id="cont">
        <Row>
          <Col>
            <div>
              <div id="prim_di">
                <h2 id="ter">Fecha 24/11/2000</h2>
              </div>
              <div
                id="imag"
                style={{
                  backgroundImage: "url(/img/HEADER-come.jpg)",
                  height: "300px",
                  width: "400px",
                }}
              ></div>

              
            </div>
          </Col>
          <Col>
            <div id="ter_di">
              <h2>{nombre} </h2>
            </div>
            <div id="cur_di">
              <h4>Descripcion</h4>
              <h4>{descripcion}</h4>
              <div id="qui_di">
                <Row>
                  <Col>
                    {" "}
                    <h6>{tiempoPreparacion} Min</h6>
                  </Col>
                  <Col>
                    {" "}
                    <h6>Dificultad {dificultad}</h6>
                  </Col>
                  <Col>
                    {" "}
                    {tipo ?(
                      <h6>Vegano</h6>
                    ):(
                      <h6>No vegano</h6>
                    )}
                  </Col>
                  <Col>
                    {" "}
                    <h6>{porciones} Personas</h6>
                  </Col>
                </Row>
              </div>
            </div>
            <div id="sex_di">
              <div>
                <Row>
                  <Col>
                    <h4 id="ter">Ingredientes</h4>
                    <h6 id="pin">{ingredientes}</h6>
                  </Col>
                  <Col>
                    <h4 id="ter">Instrucciones</h4>
                    <h6 id="pin">{instrucciones}</h6>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
