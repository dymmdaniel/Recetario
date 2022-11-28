import React from "react";
import { Container, Nav, Navbar,Card ,NavDropdown} from "react-bootstrap";
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
          <Navbar.Brand href="/"><h3 id="titulo">EZzz Gourmet</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"><h5 id="prim" >Descubre</h5></Nav.Link>
              <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" id="item">Desayuno</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" id="item">Medias Nueves</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" id="item">Almuerzo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" id="item">Onces</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" id="item">Cena</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/login"><h6 id="prim">Iniciar Sesión</h6></Nav.Link>
              <Card id="arc">
              <Nav.Link  href="/registro"><h6 id="ter">Registrarse</h6> </Nav.Link>
              </Card>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    );
  }
}
