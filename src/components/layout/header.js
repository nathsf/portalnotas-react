import React from "react";
// import {
//     Link
// } from "react-router-dom";
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import CartWidget from "./CartWidget";
import logo from '../../assets/img/logo.png'

export default function NavBar() {
  return (
    <>
    <Navbar bg="white" variant="ligth">
      <Container>
        <Navbar.Brand ><img src={logo} className="logo" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-end fs-6 fw-bold me-2" style={{lineHeight: "1"}}>
            
Hector Cantaro Segura

<br/>
 <span href="#login" className="small fw-normal">Docente</span>
          </Navbar.Text>
          <NavDropdown title="HC" className="dropdown-profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">hector.cantaro@upch.pe</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
              Cerrar sesión
              </NavDropdown.Item>
              
            </NavDropdown>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
    </>
    
  );
}


