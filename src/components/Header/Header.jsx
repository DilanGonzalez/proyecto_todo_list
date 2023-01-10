import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Header = () => {
  const { cerrar_sesion, usuario } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0 gap-3">
            {usuario ? (
              <NavLink className="nav-link" onClick={cerrar_sesion}>
                Cerrar Sesion
              </NavLink>
            ) : (
              <>
                <NavLink className="nav-link" to="/login">
                  Iniciar Sesion
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Registrarse
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
