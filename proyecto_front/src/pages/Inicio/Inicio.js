import * as React from 'react';
import { Row , Col, Card} from "react-bootstrap";
import './inicio.css'

export default function Inicio() {
  return (
    <div className="Inicio">
      <div id="imagen" style={{ backgroundImage: "url(/img/HEADER-come.jpg)" ,height:"350px"}}></div>
      <Row id='cent' >
        <Col id='cent'>
        <Card id='car'>
        <div id="imagen" style={{ backgroundImage: "url(/img/HEADER-come.jpg)" ,height:"170px" , width:"200px"}}></div>
        <h5 id="prim">Nombre del item</h5>
        <h5 id="segu">Descripcion</h5>
        <h6 id="segu">Pequeña Descripcion</h6>
        <h6 id="segu">Categoria</h6>
        <h6 id="segu">6/10</h6>
        </Card>
        </Col>
        <Col id='cent'>
        <Card id='car'>
        <div id="imagen" style={{ backgroundImage: "url(/img/HEADER-come.jpg)" ,height:"170px" , width:"200px"}}></div>
        <h5 id="prim">Nombre del item</h5>
        <h5 id="segu">Descripcion</h5>
        <h6 id="segu">Pequeña Descripcion</h6>
        <h6 id="segu">Categoria</h6>
        <h6 id="segu">6/10</h6>
        </Card>
        </Col>
        <Card id='car'>
        <div id="imagen" style={{ backgroundImage: "url(/img/HEADER-come.jpg)" ,height:"170px" , width:"200px"}}></div>
        <h5 id="prim">Nombre del item</h5>
        <h5 id="segu">Descripcion</h5>
        <h6 id="segu">Pequeña Descripcion</h6>
        <h6 id="segu">Categoria</h6>
        <h6 id="segu">6/10</h6>
        </Card>
      </Row>
      <Row id='cent' >
      <Card id='car'>
        <div id="imagen" style={{ backgroundImage: "url(/img/HEADER-come.jpg)" ,height:"170px" , width:"200px"}}></div>
        <h5 id="prim">Nombre del item</h5>
        <h5 id="segu">Descripcion</h5>
        <h6 id="segu">Pequeña Descripcion</h6>
        <h6 id="segu">Categoria</h6>
        <h6 id="segu">6/10</h6>
        </Card>
        <Card id='car'>
        <div id="imagen" style={{ backgroundImage: "url(/img/HEADER-come.jpg)" ,height:"170px" , width:"200px"}}></div>
        <h5 id="prim">Nombre del item</h5>
        <h5 id="segu">Descripcion</h5>
        <h6 id="segu">Pequeña Descripcion</h6>
        <h6 id="segu">Categoria</h6>
        <h6 id="segu">6/10</h6>
        </Card>
        <Card id='car'>
        <div id="imagen" style={{ backgroundImage: "url(/img/HEADER-come.jpg)" ,height:"170px" , width:"200px"}}></div>
        <h5 id="prim">Nombre del item</h5>
        <h5 id="segu">Descripcion</h5>
        <h6 id="segu">Pequeña Descripcion</h6>
        <h6 id="segu">Categoria</h6>
        <h6 id="segu">6/10</h6>
        </Card>
      </Row>


      

    </div>
  )
}