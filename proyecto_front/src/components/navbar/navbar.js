import React from "react";
import { Container, Nav, Navbar,Card } from "react-bootstrap";
import './navbar.css'
export default class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar id="Nav">
        <Container>
          <Navbar.Brand href="#home"><h3 id="titulo">EZzz Gourmet</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><h5 id="prim">Descubre</h5></Nav.Link>
              <Nav.Link href="#pricing"><h6 id="segu">Categoria</h6></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets"><h6 id="prim">Iniciar Sesión</h6></Nav.Link>
              <Card id="arc">
              <Nav.Link  href="#memes"><h6 id="ter">Registrarse</h6> </Nav.Link>
              </Card>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
  }
}
